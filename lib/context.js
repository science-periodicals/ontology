'use strict';

var request = require('request');
var ontology = require('../scholarly-article.json');
var fs = require('fs');
var path = require('path');
var isUrl = require('is-url');

/**
 * Generate a JSON-LD context
 */


// grab schema.org context
request.get({
  url: 'http://schema.org',
  headers: {Accept: 'application/ld+json'}
}, (err, resp, ctx) => {
  if (err) throw err;
  if (resp.statusCode >= 400) {
    throw new Error(resp.statusCode);
  }

  ctx = JSON.parse(ctx);

  // patch schema.org context as we don't want type and id to be alias for `@id` and `@type`
  delete ctx['@context'].type;
  delete ctx['@context'].id;

  // add sa terms
  ontology.defines.forEach(term => {
    let key = term['@id'].replace(/^sa:/, '');
    if (term['@type'] === 'rdfs:Class') {
      ctx['@context'][key] = urlify(term['@id'], ontology);
    } else if (term['@type'] === 'rdf:Property') {
      let iri = urlify(term['@id'], ontology);
      if (/^xsd:|schema:Date|schema:DateTime/.test(term.range)) {
        ctx['@context'][key] = {
          '@id': iri,
          '@type': term.range
        };
      } else {
        ctx['@context'][key] = {
          '@id': iri,
          '@type': '@id'
        };
      }
    }
  });

  let pkg = 'module.exports = ' + JSON.stringify(ctx, null, 2) + ';';

  fs.writeFileSync(path.join(path.dirname(__dirname), 'context.js'), pkg, {encoding: 'utf8'});
});


function urlify(value, ontology) {
  if (isUrl(value)) {
    return value;
  }

  let iri;
  let splt = value.split(':');
  let prefix = splt[0];
  if (prefix in ontology['@context']) {
    iri = (ontology['@context'][prefix]['@id'] || ontology['@context'][prefix]) + splt.slice(1).join(':');
  } else {
    let base = ontology['@context']['@base'] || ontology['@context']['@vocab'];
    iri = base + value;
  }

  return iri;
}

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
}, (err, resp, context) => {
  if (err) throw err;
  if (resp.statusCode >= 400) {
    throw new Error(resp.statusCode);
  }

  context = JSON.parse(context);
  let ctx = context['@context'];
  // patch schema.org context as we don't want type and id to be alias for `@id` and `@type`
  delete ctx.type;
  delete ctx.id;

  // make sure that xsd prefix is present as we use it for typed dates
  ctx.xsd = "http://www.w3.org/2001/XMLSchema#";

  // specify container and stricter @type than from the default context
  let schemaMap = {
    sameAs:           {'@container': '@list', '@type': '@id'},
    encoding:         {'@container': '@list', '@type': '@id'},
    hasPart:          {'@container': '@list', '@type': '@id'},
    encoding:         {'@container': '@set',  '@type': '@id'},
    distribution:     {'@container': '@set',  '@type': '@id'},
    additionalName:   {'@container': '@list', '@type': '@id'},
    comment:          {'@container': '@list', '@type': '@id'},
    agent:            {'@type': '@id'}, // do not make the following @list to simplify role processing
    recipient:        {'@type': '@id'},
    author:           {'@type': '@id'},
    contributor:      {'@type': '@id'},
    provider:         {'@type': '@id'},
    creator:          {'@type': '@id'},
    thumbnail:        {'@container': '@set',  '@type': '@id'},
    isBasedOnUrl:     {'@container': '@set',  '@type': '@id'},
    exampleOfWork:    {'@container': '@set',  '@type': '@id'},
    potentialAction:  {'@container': '@list', '@type': '@id'},
    result:           {'@container': '@list', '@type': '@id'},
    about:            {'@container': '@list', '@type': '@id'},
    sponsor:          {'@container': '@list', '@type': '@id'},
    citation:         {'@container': '@list', '@type': '@id'},
    keywords:         {'@container': '@list'},
    participant:      {'@container': '@list', '@type': '@id'}
  };

  for (let key in schemaMap) {
    if (key in ctx) {
      if (typeof ctx[key] === 'string') {
        ctx[key] = Object.assign({'@id': ctx[key]}, schemaMap[key]);
      } else {
        ctx[key] = Object.assign(
          ctx[key],
          ctx[key]['@id'] ? null : {'@id': ctx['@vocab'] + key},
          schemaMap[key]
        );
      }
    } else {
      ctx[key] = Object.assign({
        '@id': ctx['@vocab'] + key
      }, schemaMap[key]);
    }
  }


  // add sa terms
  let saContainerMap = {
    selector: '@set',
    roleAction: '@list',
    roleAffiliation: '@list',
    roleContactPoint: '@list',
    roleOffer: '@list',
    contentChecksum: '@set',
    selector: '@set'
  };

  ontology.defines.forEach(term => {
    let key = term['@id'].replace(/^sa:/, '');
    if (term['@type'] === 'rdfs:Class') {
      ctx[key] = urlify(term['@id'], ontology);
    } else if (term['@type'] === 'rdf:Property') {
      let iri = urlify(term['@id'], ontology);
      if (/^xsd:|schema:Date|schema:DateTime/.test(term.range)) {
        ctx[key] = {
          '@id': iri,
          '@type': term.range
        };
      } else {
        ctx[key] = {
          '@id': iri,
          '@type': '@id'
        };
      }
      if (key in saContainerMap) {
        ctx[key]['@container'] = saContainerMap[key];
      }
    }
  });

  let pkg = 'module.exports = ' + JSON.stringify(context, null, 2) + ';';

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

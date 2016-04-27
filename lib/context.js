'use strict';

var ontology = require('../scholarly-article.json');
var fs = require('fs');
var path = require('path');
var isUrl = require('is-url');
var context = require('schema.org/context').default;

/**
 * Generate a JSON-LD context
 */

let ctx = context['@context'];
// patch schema.org context as we don't want type and id to be alias for `@id` and `@type`
delete ctx.type;
delete ctx.id;

// prefixes
ctx.xsd = "http://www.w3.org/2001/XMLSchema#"; // make sure that xsd prefix is present as we use it for typed dates
ctx.sa = "http://ns.science.ai#";
ctx.user = "https://science.ai/user/";
ctx.bot = "https://science.ai/bot/";
ctx.error = "https://science.ai/error/";
ctx.tmp = "https://science.ai/tmp/";
ctx.scienceai = "https://science.ai/";


// specify container and stricter @type than from the default context
let schemaMap = {
  sameAs:               {'@container': '@set', '@type': '@id'},
  hasPart:              {'@container': '@list', '@type': '@id'},
  encoding:             {'@container': '@set',  '@type': '@id'},
  distribution:         {'@container': '@set',  '@type': '@id'},
  review:               {'@container': '@set', '@type': '@id'},
  comment:              {'@container': '@set', '@type': '@id'},
  agent:                {'@type': '@id'},
  participant:          {'@container': '@set', '@type': '@id'},
  recipient:            {'@type': '@id'},
  creator:              {'@type': '@id'},
  author:               {'@container': '@list', '@type': '@id'},
  contributor:          {'@container': '@list', '@type': '@id'},
  provider:             {'@container': '@list', '@type': '@id'},
  affiliation:          {'@container': '@list', '@type': '@id'},
  thumbnail:            {'@container': '@set',  '@type': '@id'},
  isBasedOnUrl:         {'@container': '@set',  '@type': '@id'},
  encodesCreativeWork:  {'@type': '@id'},
  isPartOf:             {'@type': '@id'},
  exampleOfWork:        {'@container': '@set',  '@type': '@id'},
  potentialAction:      {'@container': '@set', '@type': '@id'},
  result:               {'@type': '@id'},
  object:               {'@type': '@id'},
  about:                {'@container': '@set', '@type': '@id'},
  mainEntity:           {'@type': '@id'},
  mainEntityOfPage:     {'@type': '@id'},
  copyrightHolder:      {'@type': '@id'},
  sponsor:              {'@container': '@set', '@type': '@id'},
  citation:             {'@container': '@list', '@type': '@id'},
  keywords:             {'@container': '@set'},
  exifData:             {'@container': '@set', '@type': '@id'},
  location:             {'@type': '@id'},
  address:              {'@type': '@id'},
  parentOrganization:   {'@type': '@id'},
  expectsAcceptanceOf:  {'@type': '@id'}
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

ctx.datePublished = { '@id': 'http://schema.org/datePublished' };
ctx.endTime = { '@id': 'http://schema.org/endTime' };

// reverse properties currently not in schema.org
ctx.targetProductOf = { "@reverse": "http://schema.org/targetProduct", "@type": "@id" };


// add sa terms
let saContainerMap = {
  selector: '@set',
  roleAction: '@list',
  roleAffiliation: '@list',
  roleContactPoint: '@list',
  roleOffer: '@list',
  contentChecksum: '@set'
};

ontology.defines.forEach(term => {
  let key = term['@id'].replace(/^sa:/, '');
  if (term['@type'] === 'rdfs:Class') {
    ctx[key] = urlify(term['@id'], ontology);
  } else if (term['@type'] === 'rdf:Property') {
    let iri = urlify(term['@id'], ontology);
    if (/^xsd:|schema:Date|schema:DateTime|schema:Text|schema:Number/.test(term.range)) {
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

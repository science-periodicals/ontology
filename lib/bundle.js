(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  "@context": {
    "cat": "http://www.w3.org/ns/dcat#",
    "qb": "http://purl.org/linked-data/cube#",
    "org": "http://www.w3.org/ns/org#",
    "grddl": "http://www.w3.org/2003/g/data-view#",
    "ma": "http://www.w3.org/ns/ma-ont#",
    "owl": "http://www.w3.org/2002/07/owl#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfa": "http://www.w3.org/ns/rdfa#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "rif": "http://www.w3.org/2007/rif#",
    "rr": "http://www.w3.org/ns/r2rml#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "skosxl": "http://www.w3.org/2008/05/skos-xl#",
    "wdr": "http://www.w3.org/2007/05/powder#",
    "void": "http://rdfs.org/ns/void#",
    "wdrs": "http://www.w3.org/2007/05/powder-s#",
    "xhv": "http://www.w3.org/1999/xhtml/vocab#",
    "xml": "http://www.w3.org/XML/1998/namespace",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "prov": "http://www.w3.org/ns/prov#",
    "sd": "http://www.w3.org/ns/sparql-service-description#",
    "gldp": "http://www.w3.org/ns/people#",
    "cnt": "http://www.w3.org/2008/content#",
    "dcat": "http://www.w3.org/ns/dcat#",
    "earl": "http://www.w3.org/ns/earl#",
    "ht": "http://www.w3.org/2006/http#",
    "ptr": "http://www.w3.org/2009/pointers#",
    "cc": "http://creativecommons.org/ns#",
    "ctag": "http://commontag.org/ns#",
    "dc": "http://purl.org/dc/terms/",
    "dcterms": "http://purl.org/dc/terms/",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "gr": "http://purl.org/goodrelations/v1#",
    "ical": "http://www.w3.org/2002/12/cal/icaltzd#",
    "og": "http://ogp.me/ns#",
    "rev": "http://purl.org/stuff/rev#",
    "sioc": "http://rdfs.org/sioc/ns#",
    "v": "http://rdf.data-vocabulary.org/#",
    "vcard": "http://www.w3.org/2006/vcard/ns#",
    "schema": "http://schema.org/",
    "describedby": "http://www.w3.org/2007/05/powder-s#describedby",
    "license": {
      "@type": "@id"
    },
    "role": "http://www.w3.org/1999/xhtml/vocab#role",
    "@vocab": "http://schema.org/",
    "acceptsReservations": {
      "@type": "@id"
    },
    "actionPlatform": {
      "@type": "@id"
    },
    "additionalType": {
      "@type": "@id"
    },
    "applicationCategory": {
      "@type": "@id"
    },
    "applicationSubCategory": {
      "@type": "@id"
    },
    "arrivalTime": {
      "@type": "DateTime"
    },
    "artMedium": {
      "@type": "@id"
    },
    "artform": {
      "@type": "@id"
    },
    "artworkSurface": {
      "@type": "@id"
    },
    "availabilityEnds": {
      "@type": "DateTime"
    },
    "availabilityStarts": {
      "@type": "DateTime"
    },
    "availableFrom": {
      "@type": "DateTime"
    },
    "availableThrough": {
      "@type": "DateTime"
    },
    "birthDate": {
      "@type": "Date"
    },
    "bodyType": {
      "@type": "@id"
    },
    "bookingTime": {
      "@type": "DateTime"
    },
    "checkinTime": {
      "@type": "DateTime"
    },
    "checkoutTime": {
      "@type": "DateTime"
    },
    "codeRepository": {
      "@type": "@id"
    },
    "commentTime": {
      "@type": "Date"
    },
    "contentUrl": {
      "@type": "@id"
    },
    "coverageEndTime": {
      "@type": "DateTime"
    },
    "coverageStartTime": {
      "@type": "DateTime"
    },
    "datasetTimeInterval": {
      "@type": "DateTime"
    },
    "dateCreated": {
      "@type": "Date"
    },
    "dateDeleted": {
      "@type": "DateTime"
    },
    "dateIssued": {
      "@type": "DateTime"
    },
    "dateModified": {
      "@type": "Date"
    },
    "datePosted": {
      "@type": "Date"
    },
    "datePublished": {
      "@type": "Date"
    },
    "dateVehicleFirstRegistered": {
      "@type": "Date"
    },
    "deathDate": {
      "@type": "Date"
    },
    "departureTime": {
      "@type": "DateTime"
    },
    "discussionUrl": {
      "@type": "@id"
    },
    "dissolutionDate": {
      "@type": "Date"
    },
    "doorTime": {
      "@type": "DateTime"
    },
    "downloadUrl": {
      "@type": "@id"
    },
    "dropoffTime": {
      "@type": "DateTime"
    },
    "embedUrl": {
      "@type": "@id"
    },
    "endDate": {
      "@type": "Date"
    },
    "endTime": {
      "@type": "DateTime"
    },
    "engineType": {
      "@type": "@id"
    },
    "expectedArrivalFrom": {
      "@type": "DateTime"
    },
    "expectedArrivalUntil": {
      "@type": "DateTime"
    },
    "expires": {
      "@type": "Date"
    },
    "featureList": {
      "@type": "@id"
    },
    "foundingDate": {
      "@type": "Date"
    },
    "fuelType": {
      "@type": "@id"
    },
    "gameLocation": {
      "@type": "@id"
    },
    "gamePlatform": {
      "@type": "@id"
    },
    "genre": {
      "@type": "@id"
    },
    "guidelineDate": {
      "@type": "Date"
    },
    "hasMap": {
      "@type": "@id"
    },
    "image": {
      "@type": "@id"
    },
    "installUrl": {
      "@type": "@id"
    },
    "isBasedOnUrl": {
      "@type": "@id",
      "@id": "http://schema.org/isBasedOnUrl",
      "@container": "@set"
    },
    "labelDetails": {
      "@type": "@id"
    },
    "lastReviewed": {
      "@type": "Date"
    },
    "logo": {
      "@type": "@id"
    },
    "mainEntityOfPage": {
      "@type": "@id"
    },
    "map": {
      "@type": "@id"
    },
    "maps": {
      "@type": "@id"
    },
    "material": {
      "@type": "@id"
    },
    "meetsEmissionStandard": {
      "@type": "@id"
    },
    "memoryRequirements": {
      "@type": "@id"
    },
    "menu": {
      "@type": "@id"
    },
    "modelDate": {
      "@type": "Date"
    },
    "modifiedTime": {
      "@type": "DateTime"
    },
    "namedPosition": {
      "@type": "@id"
    },
    "orderDate": {
      "@type": "DateTime"
    },
    "ownedFrom": {
      "@type": "DateTime"
    },
    "ownedThrough": {
      "@type": "DateTime"
    },
    "paymentDue": {
      "@type": "DateTime"
    },
    "paymentDueDate": {
      "@type": "DateTime"
    },
    "paymentUrl": {
      "@type": "@id"
    },
    "pickupTime": {
      "@type": "DateTime"
    },
    "prescribingInfo": {
      "@type": "@id"
    },
    "previousStartDate": {
      "@type": "Date"
    },
    "priceValidUntil": {
      "@type": "Date"
    },
    "productionDate": {
      "@type": "Date"
    },
    "propertyID": {
      "@type": "@id"
    },
    "publishingPrinciples": {
      "@type": "@id"
    },
    "purchaseDate": {
      "@type": "Date"
    },
    "relatedLink": {
      "@type": "@id"
    },
    "releaseDate": {
      "@type": "Date"
    },
    "releaseNotes": {
      "@type": "@id"
    },
    "replyToUrl": {
      "@type": "@id"
    },
    "requirements": {
      "@type": "@id"
    },
    "roleName": {
      "@type": "@id"
    },
    "sameAs": {
      "@type": "@id",
      "@id": "http://schema.org/sameAs",
      "@container": "@list"
    },
    "scheduledPaymentDate": {
      "@type": "Date"
    },
    "scheduledTime": {
      "@type": "DateTime"
    },
    "schemaVersion": {
      "@type": "@id"
    },
    "screenshot": {
      "@type": "@id"
    },
    "serviceUrl": {
      "@type": "@id"
    },
    "significantLink": {
      "@type": "@id"
    },
    "significantLinks": {
      "@type": "@id"
    },
    "softwareRequirements": {
      "@type": "@id"
    },
    "sport": {
      "@type": "@id"
    },
    "startDate": {
      "@type": "Date"
    },
    "startTime": {
      "@type": "DateTime"
    },
    "storageRequirements": {
      "@type": "@id"
    },
    "surface": {
      "@type": "@id"
    },
    "targetUrl": {
      "@type": "@id"
    },
    "temporal": {
      "@type": "DateTime"
    },
    "thumbnailUrl": {
      "@type": "@id"
    },
    "ticketToken": {
      "@type": "@id"
    },
    "trackingUrl": {
      "@type": "@id"
    },
    "unitCode": {
      "@type": "@id"
    },
    "uploadDate": {
      "@type": "Date"
    },
    "url": {
      "@type": "@id"
    },
    "validFrom": {
      "@type": "DateTime"
    },
    "validThrough": {
      "@type": "DateTime"
    },
    "validUntil": {
      "@type": "Date"
    },
    "vehicleModelDate": {
      "@type": "Date"
    },
    "vehicleTransmission": {
      "@type": "@id"
    },
    "warning": {
      "@type": "@id"
    },
    "webCheckinTime": {
      "@type": "DateTime"
    },
    "encoding": {
      "@id": "http://schema.org/encoding",
      "@container": "@list",
      "@type": "@id"
    },
    "hasPart": {
      "@id": "http://schema.org/hasPart",
      "@container": "@list",
      "@type": "@id"
    },
    "distribution": {
      "@id": "http://schema.org/distribution",
      "@container": "@list",
      "@type": "@id"
    },
    "additionalName": {
      "@id": "http://schema.org/additionalName",
      "@container": "@list",
      "@type": "@id"
    },
    "comment": {
      "@id": "http://schema.org/comment",
      "@container": "@list",
      "@type": "@id"
    },
    "author": {
      "@id": "http://schema.org/author",
      "@container": "@list",
      "@type": "@id"
    },
    "contributor": {
      "@id": "http://schema.org/contributor",
      "@container": "@list",
      "@type": "@id"
    },
    "provider": {
      "@id": "http://schema.org/provider",
      "@type": "@id"
    },
    "creator": {
      "@id": "http://schema.org/creator",
      "@type": "@id"
    },
    "thumbnail": {
      "@id": "http://schema.org/thumbnail",
      "@container": "@set",
      "@type": "@id"
    },
    "exampleOfWork": {
      "@id": "http://schema.org/exampleOfWork",
      "@container": "@set",
      "@type": "@id"
    },
    "potentialAction": {
      "@id": "http://schema.org/potentialAction",
      "@container": "@list",
      "@type": "@id"
    },
    "result": {
      "@id": "http://schema.org/result",
      "@container": "@list",
      "@type": "@id"
    },
    "recipient": {
      "@id": "http://schema.org/recipient",
      "@container": "@list",
      "@type": "@id"
    },
    "about": {
      "@id": "http://schema.org/about",
      "@container": "@list",
      "@type": "@id"
    },
    "sponsor": {
      "@id": "http://schema.org/sponsor",
      "@container": "@list",
      "@type": "@id"
    },
    "citation": {
      "@id": "http://schema.org/citation",
      "@container": "@list",
      "@type": "@id"
    },
    "keywords": {
      "@id": "http://schema.org/keywords",
      "@container": "@list"
    },
    "participant": {
      "@id": "http://schema.org/participant",
      "@container": "@list",
      "@type": "@id"
    },
    "Unspecified": "http://ns.science.ai#Unspecified",
    "Abstract": "http://ns.science.ai#Abstract",
    "Authors": "http://ns.science.ai#Authors",
    "Contributors": "http://ns.science.ai#Contributors",
    "Affiliations": "http://ns.science.ai#Affiliations",
    "Introduction": "http://ns.science.ai#Introduction",
    "MaterialsAndMethods": "http://ns.science.ai#MaterialsAndMethods",
    "Results": "http://ns.science.ai#Results",
    "Discussion": "http://ns.science.ai#Discussion",
    "Conclusion": "http://ns.science.ai#Conclusion",
    "Acknowledgements": "http://ns.science.ai#Acknowledgements",
    "Abbreviations": "http://ns.science.ai#Abbreviations",
    "Copyright": "http://ns.science.ai#Copyright",
    "Disclosure": "http://ns.science.ai#Disclosure",
    "Funding": "http://ns.science.ai#Funding",
    "Keywords": "http://ns.science.ai#Keywords",
    "SupportingInformation": "http://ns.science.ai#SupportingInformation",
    "ReferenceList": "http://ns.science.ai#ReferenceList",
    "Reference": "http://ns.science.ai#Reference",
    "Formula": "http://ns.science.ai#Formula",
    "FormulaObject": "http://ns.science.ai#FormulaObject",
    "Image": "http://ns.science.ai#Image",
    "Video": "http://ns.science.ai#Video",
    "Audio": "http://ns.science.ai#Audio",
    "TableObject": "http://ns.science.ai#TableObject",
    "DocumentObject": "http://ns.science.ai#DocumentObject",
    "Checksum": "http://ns.science.ai#Checksum",
    "PerceptualHash": "http://ns.science.ai#PerceptualHash",
    "contentChecksum": {
      "@id": "http://ns.science.ai#contentChecksum",
      "@type": "@id",
      "@container": "@set"
    },
    "checksumAlgorithm": {
      "@id": "http://ns.science.ai#checksumAlgorithm",
      "@type": "xsd:string"
    },
    "checksumValue": {
      "@id": "http://ns.science.ai#checksumValue",
      "@type": "xsd:string"
    },
    "doi": {
      "@id": "http://ns.science.ai#doi",
      "@type": "@id"
    },
    "ContributorRole": "http://ns.science.ai#ContributorRole",
    "roleAffiliation": {
      "@id": "http://ns.science.ai#roleAffiliation",
      "@type": "@id",
      "@container": "@list"
    },
    "roleContactPoint": {
      "@id": "http://ns.science.ai#roleContactPoint",
      "@type": "@id",
      "@container": "@list"
    },
    "SponsorRole": "http://ns.science.ai#SponsorRole",
    "roleOffer": {
      "@id": "http://ns.science.ai#roleOffer",
      "@type": "@id",
      "@container": "@list"
    },
    "FundingSource": "http://ns.science.ai#FundingSource",
    "roleAction": {
      "@id": "http://ns.science.ai#roleAction",
      "@type": "@id",
      "@container": "@list"
    },
    "DisclosureAction": "http://ns.science.ai#DisclosureAction",
    "AcknowledgeAction": "http://ns.science.ai#AcknowledgeAction",
    "UploadAction": "http://ns.science.ai#UploadAction",
    "MimeDetectionAction": "http://ns.science.ai#MimeDetectionAction",
    "ImageProcessingAction": "http://ns.science.ai#ImageProcessingAction",
    "AudioVideoProcessingAction": "http://ns.science.ai#AudioVideoProcessingAction",
    "RdfaConversionAction": "http://ns.science.ai#RdfaConversionAction",
    "CsvwAction": "http://ns.science.ai#CsvwAction",
    "SemanticTaggingAction": "http://ns.science.ai#SemanticTaggingAction"
  }
};
},{}],2:[function(require,module,exports){
var jsonldMarkup = require('jsonld-markup');
var jsonldVis = require('jsonld-vis');
var context = require('../context');

document.addEventListener('DOMContentLoaded', function() {
  var $code = document.querySelector('#example-jsonld code');
  var data = JSON.parse($code.textContent.trim());

  jsonldVis(data, '#viz', {
    w: 600,
    h: 800,
    maxLabelWidth: 240,
    transitionDuration: 450,
    scalingFactor: 10
  });

  $code.innerHTML = jsonldMarkup(data, context['@context']);

  var $a = document.querySelector('a[href="#example-jsonld"]');
  $a.addEventListener('click', function(e) {
    e.preventDefault();
    $code.parentElement.classList.toggle('hidden');
  });
});

},{"../context":1,"jsonld-markup":3,"jsonld-vis":4}],3:[function(require,module,exports){
// json to html conversion is adapted from https://github.com/mafintosh/json-markup

(function() {

  function jsonldMarkup(doc, ctx, opts) {
    ctx = ctx || {};
    opts = opts || {};

    var INDENT = new Array(opts.indent || 2).join(' ');

    var indent = '';

    function forEach(list, start, end, fn, _key) {
      if (!list.length) return start + ' ' + end;

      var out = start + '\n';

      indent += INDENT;
      list.forEach(function(key, i) {
        out += indent + fn(key, _key) + (i < list.length-1 ? ',' : '') + '\n';
      });
      indent = indent.slice(0, -INDENT.length);

      return out + indent + end;
    };

    function visit(obj, _key) {
      if (obj === undefined) return '';

      switch (type(obj)) {
        case 'boolean':
	  return '<span class="jsonld-markup-bool">' + obj + '</span>';

        case 'number':
	  return '<span class="jsonld-markup-number">' + obj + '</span>';

        case 'null':
	  return '<span class="jsonld-markup-null">null</span>\n';

        case 'string':
          var href;
          if (_key && ((_key === '@type') || (_key in ctx && ctx[_key]['@type'] === '@id'))) {
            if (isUrl(obj)) {
              href = obj;
            } else if (obj in ctx) {
              href = iri2url(ctx[obj]['@id'] || ctx[obj], ctx);
            } else if (~obj.indexOf(':') && (obj.split(':')[0] in ctx)) {
              var splt = obj.split(':');
              href = (ctx[splt[0]]['@id'] || ctx[splt[0]]) + splt.slice(1).join(':');
            } else if (_key === '@type' && ctx['@vocab']) {
              href = ctx['@vocab'] + obj;
            } else if (ctx['@base']) {
              href = ctx['@base'] + obj;
            }
          }

          var mvalue;
          if (href) {
            mvalue = '<a href="' + href + '" target="_blank">' + obj + '</a>';
          } else {
            mvalue = escape(obj.replace(/\n/g, '\n' + indent));
          }

	  return '<span class="jsonld-markup-string">"' + mvalue + '"</span>';

        case 'link':
	  return '<span class="jsonld-markup-string">"<a href="' + escape(obj)+'" target="_blank">'+escape(obj) + '</a>"</span>';

        case 'array':
          var isList = _key && (_key in ctx && ctx[_key]['@container'] === '@list');
          var openBracket = '<span class="jsonld-markup-' + (isList ? 'list': 'set') + '">[</span>'
          var closeBracket = '<span class="jsonld-markup-' + (isList ? 'list': 'set') + '">]</span>'
          return forEach(obj, openBracket, closeBracket, visit, _key);

        case 'object':
	  var keys = Object.keys(obj).filter(function(key) {
	    return obj[key] !== undefined;
	  });

	  return forEach(keys, '{', '}', function(key) {
            var href, isKeywordMapping;
            if (key in ctx) {
              if (ctx[key]['@id']) {
                href = iri2url(ctx[key]['@id'], ctx);
              } else {
                // we protect ourselves from case where ctx[key] is for instance {"@container": "@list"}
                if (typeof ctx[key] === 'object') {
                  if (ctx['@vocab']) {
                    href = ctx['@vocab'] + key;
                  }
                } else {
                  if (ctx[key].charAt(0) === '@') {
                    // keyword mapping e.g id -> @id
                    isKeywordMapping = ctx[key];
                  } else {
                    href = iri2url(ctx[key], ctx);
                  }
                }
              }
            } else if (isUrl(key)) {
              href = key;
            } else if (~key.indexOf(':') && (key.split(':')[0] in ctx)) {
              var splt = key.split(':');
              href = (ctx[splt[0]]['@id'] || ctx[splt[0]]) + splt.slice(1).join(':');
            } else if (ctx['@vocab'] && key.charAt(0) !== '@') {
              href = ctx['@vocab'] + key;
            }

            if (isKeywordMapping) {
	      return '<span class="jsonld-markup-key-' + isKeywordMapping.slice(1) + '">"'+ '<abbr title="' + isKeywordMapping + '">' + key  + '</abbr>":</span> ' + visit(obj[key], key);
            } else {
              var mkey;
              if (href) {
                mkey = '<a href="' + href + '" target="_blank">' + key + '</a>';
              } else {
                mkey = key;
              }
	      return '"<span class="jsonld-markup-key' + ((key.charAt(0) === '@')? ('-' + key.slice(1)) : '' ) + '">'+ mkey + '</span>": ' + visit(obj[key], key);
            }
	  });
      }

      return '';
    };

    return '<div class="jsonld-markup">' + visit(doc) + '</div>';
  };

  function isUrl(str) {
    return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(str);
  }

  function iri2url(iri, ctx) {
    if (isUrl(iri)) {
      return iri;
    } else {
      var irisplt = iri.split(':');
      if (irisplt.length > 1 && (irisplt[0] in ctx)) {
        return (ctx[irisplt[0]]['@id'] || ctx[irisplt[0]]) + irisplt.slice(1).join(':');
      }
    }
  }

  function type(obj) {
    if (obj === null) return 'null';
    if (Array.isArray(obj)) return 'array';
    if (typeof obj === 'string' && isUrl(obj)) return 'link';

    return typeof obj;
  };

  function escape(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsonldMarkup;
  } else {
    window.jsonldMarkup = jsonldMarkup;
  }

})();

},{}],4:[function(require,module,exports){
(function() {
  'use strict';

  function jsonldVis(jsonld, selector, config) {
    if (!arguments.length) return jsonldVis;
    config = config || {};

    var h = config.h || 600
      , w = config.w || 800
      , maxLabelWidth = config.maxLabelWidth || 250
      , transitionDuration = config.transitionDuration || 750
      , transitionEase = config.transitionEase || 'cubic-in-out'
      , minRadius = config.minRadius || 5
      , scalingFactor = config.scalingFactor || 2;

    var i = 0;

    var tree = d3.layout.tree()
      .size([h, w]);

    var diagonal = d3.svg.diagonal()
      .projection(function(d) { return [d.y, d.x]; });

    var svg = d3.select(selector).append('svg')
      .attr('width', w)
      .attr('height', h)
      .append('g')
      .attr('transform', 'translate(' + maxLabelWidth + ',0)');

    var tip = d3.tip()
      .direction(function(d) {
        return d.children || d._children ? 'w' : 'e';
      })
      .offset(function(d) {
        return d.children || d._children ? [0, -3] : [0, 3];
      })
      .attr('class', 'd3-tip')
      .html(function(d) {
        return '<span>' + d.valueExtended + '</span>';
      });

    svg.call(tip);

    var root = jsonldTree(jsonld);
    root.x0 = h / 2;
    root.y0 = 0;
    root.children.forEach(collapse);

    function changeSVGWidth(newWidth) {
      if (w !== newWidth) {
        d3.select(selector + ' > svg').attr('width', newWidth);
      }
    }

    function jsonldTree(source) {
      var tree = {};

      if ('@id' in source) {
        tree.isIdNode = true;
        tree.name = source['@id'];
        if (tree.name.length > maxLabelWidth / 9) {
          tree.valueExtended = tree.name;
          tree.name = '...' + tree.valueExtended.slice(-Math.floor(maxLabelWidth / 9));
        }
      } else {
        tree.isIdNode = true;
        tree.isBlankNode = true;
        // random id, can replace with actual uuid generator if needed
        tree.name = '_' + Math.random().toString(10).slice(-7);
      }

      var children = [];
      Object.keys(source).forEach(function(key) {
        if (key === '@id' || key === '@context' || source[key] === null) return;

        var valueExtended, value;
        if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
          children.push({
            name: key,
            children: [jsonldTree(source[key])]
          });
        } else if (Array.isArray(source[key])) {
          children.push({
            name: key,
            children: source[key].map(function(item) {
              if (typeof item === 'object') {
                return jsonldTree(item);
              } else {
                return { name: item };
              }
            })
          });
        } else {
          valueExtended = source[key];
          value = valueExtended;
          if (value.length > maxLabelWidth / 9) {
            value = value.slice(0, Math.floor(maxLabelWidth / 9)) + '...';
            children.push({
              name: key,
              value: value,
              valueExtended: valueExtended
            });
          } else {
            children.push({
              name: key,
              value: value
            });
          }
        }
      });

      if (children.length) {
        tree.children = children;
      }

      return tree;
    }

    function update(source) {
      var nodes = tree.nodes(root).reverse();
      var links = tree.links(nodes);

      nodes.forEach(function(d) { d.y = d.depth * maxLabelWidth; });

      var node = svg.selectAll('g.node')
        .data(nodes, function(d) { return d.id || (d.id = ++i); });

      var nodeEnter = node.enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', function(d) { return 'translate(' + source.y0 + ',' + source.x0 + ')'; })
        .on('click', click);

      nodeEnter.append('circle')
        .attr('r', 0)
        .style('stroke-width', function(d) {
          return d.isIdNode ? '2px' : '1px';
        })
        .style('stroke', function(d) {
          return d.isIdNode ? '#F7CA18' : '#4ECDC4';
        })
        .style('fill', function(d) {
          if (d.isIdNode) {
            return d._children ? '#F5D76E' : 'white';
          } else {
            return d._children ? '#86E2D5' : 'white';
          }
        })
        .on('mouseover', function(d) { if (d.valueExtended) tip.show(d); })
        .on('mouseout', tip.hide);

      nodeEnter.append('text')
        .attr('x', function(d) {
          var spacing = computeRadius(d) + 5;
          return d.children || d._children ? -spacing : spacing;
        })
        .attr('dy', '4')
        .attr('text-anchor', function(d) { return d.children || d._children ? 'end' : 'start'; })
        .text(function(d) { return d.name + (d.value ? ': ' + d.value : ''); })
        .style('fill-opacity', 0);

      var maxSpan = Math.max.apply(Math, nodes.map(function(d) { return d.y + maxLabelWidth; }));
      if (maxSpan + maxLabelWidth + 20 > w) {
        changeSVGWidth(maxSpan + maxLabelWidth);
        d3.select(selector).node().scrollLeft = source.y0;
      }

      var nodeUpdate = node.transition()
        .duration(transitionDuration)
        .ease(transitionEase)
        .attr('transform', function(d) { return 'translate(' + d.y + ',' + d.x + ')'; });

      nodeUpdate.select('circle')
        .attr('r', function(d) { return computeRadius(d); })
        .style('stroke-width', function(d) {
          return d.isIdNode ? '2px' : '1px';
        })
        .style('stroke', function(d) {
          return d.isIdNode ? '#F7CA18' : '#4ECDC4';
        })
        .style('fill', function(d) {
          if (d.isIdNode) {
            return d._children ? '#F5D76E' : 'white';
          } else {
            return d._children ? '#86E2D5' : 'white';
          }
        });

      nodeUpdate.select('text').style('fill-opacity', 1);

      var nodeExit = node.exit().transition()
        .duration(transitionDuration)
        .ease(transitionEase)
        .attr('transform', function(d) { return 'translate(' + source.y + ',' + source.x + ')'; })
        .remove();

      nodeExit.select('circle').attr('r', 0);
      nodeExit.select('text').style('fill-opacity', 0);

      var link = svg.selectAll('path.link')
        .data(links, function(d) { return d.target.id; });

      link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', function(d) {
          var o = { x: source.x0, y: source.y0 };
          return diagonal({ source: o, target: o });
        });

      link.transition()
        .duration(transitionDuration)
        .ease(transitionEase)
        .attr('d', diagonal);

      link.exit().transition()
        .duration(transitionDuration)
        .ease(transitionEase)
        .attr('d', function(d) {
          var o = { x: source.x, y: source.y };
          return diagonal({ source: o, target: o });
        })
        .remove();

      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    function computeRadius(d) {
      if (d.children || d._children) {
        return minRadius + (numEndNodes(d) / scalingFactor);
      } else {
        return minRadius;
      }
    }

    function numEndNodes(n) {
      var num = 0;
      if (n.children) {
        n.children.forEach(function(c) {
          num += numEndNodes(c);
        });
      } else if (n._children) {
        n._children.forEach(function(c) {
          num += numEndNodes(c);
        });
      } else {
        num++;
      }
      return num;
    }

    function click(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }

      update(d);

      // fast-forward blank nodes
      if (d.children) {
        d.children.forEach(function(child) {
          if (child.isBlankNode && child._children) {
            click(child);
          }
        });
      }
    }

    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    update(root);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsonldVis;
  } else {
    d3.jsonldVis = jsonldVis;
  }
})();

},{}]},{},[2]);

'use strict';

var ontology = require('../scholarly-article.json');
var jsdom = require('jsdom');
var isUrl = require('is-url');
var fs = require('fs');
var path = require('path');

let document = jsdom.jsdom(fs.readFileSync(path.join(__dirname, 'template.html'), {encoding: 'utf8'})).defaultView.document;

// inject table of content (overview)

[
  {'@type': 'rdfs:Class', id: 'overview-classes'},
  {'@type': 'rdf:Property', id: 'overview-properties'},
].forEach(x => {

  let terms = ontology.defines.filter(term => term['@type'] === x['@type'])
                      .sort((a, b) => {
                        return a.label.localeCompare(b.label);
                      });

  let $ul = document.getElementById(x.id);
  terms.forEach(term => {
    let id = term['@id'].split(':')[1];
    let $li = document.createElement('li');
    $li.innerHTML = `<a href="#${id}">${id}</a>`;
    $ul.appendChild($li);
  });

});



// inject ontology in RDFa

let $article = document.createElement('article');
$article.setAttribute('prefix', ['schema', 'sa', 'rdfs', 'rdf', 'owl', 'dc', 'skos'].map(x => `${x}: ${ontology['@context'][x]}`).join(' '));

[
  {'@type': 'rdfs:Class', label: 'Classes'},
  {'@type': 'rdf:Property', label: 'Properties'},
].forEach(x => {

  let $section = document.createElement('section');
  let $h2 = document.createElement('h2');
  $h2.textContent = x.label;
  $section.appendChild($h2);

  let $ul = document.createElement('ul');

  let terms = ontology.defines.filter(term => term['@type'] === x['@type'])
                      .sort((a, b) => {
                        return a.label.localeCompare(b.label);
                      });

  terms.forEach(term => {
    let $li = document.createElement('li');
    $li.setAttribute('typeof', term['@type']);
    $li.setAttribute('resource', term['@id']);
    $li.setAttribute('id', term['@id'].split(':').slice(1).join(':'));

    let $meta = document.createElement('meta');
    $meta.setAttribute('property', 'rdfs:isDefinedBy');
    $meta.setAttribute('content', ontology['@id']);

    $li.appendChild($meta);

    let $h3 = document.createElement('h3');
    $h3.setAttribute('property', 'label');
    $h3.textContent = term.label;
    $li.appendChild($h3);

    let $p = document.createElement('p');
    $p.setAttribute('property', 'rdfs:comment');
    $p.innerHTML = term.comment;
    $li.appendChild($p);

    let $dl = document.createElement('dl');
    ['altLabel', '@id', 'subClassOf', 'range', 'domain', 'sameAs', 'source', 'seeAlso'].forEach(prop => {
      if (!term[prop] || term[prop][0] == null) return;

      let $dt = document.createElement('dt');
      if (prop === '@id') {
        $dt.textContent = 'URL';
      } else if (prop === 'subClassOf') {
        $dt.textContent = 'subclass of';
      } else if (prop === 'seeAlso') {
        $dt.textContent = 'see also';
      } else if (prop === 'altLabel') {
        $dt.textContent = 'alternate label';
      } else {
        $dt.textContent = prop;
      }
      $dl.appendChild($dt);

      let $dd = document.createElement('dd');
      let $ul = document.createElement('ul');
      let values = Array.isArray(term[prop]) ? term[prop] : [term[prop]];
      values.forEach(value => {
        let $li = document.createElement('li');
        let $a = document.createElement((prop === 'label' || prop === 'altLabel') ? 'span': 'a');
        if (prop.charAt(0) !== '@') {
          $a.setAttribute('property', ontology['@context'][prop]['@id'] || ontology['@context'][prop]);
        }

        let href, target;
        if (isUrl(value)) {
          href = value;
          target = value;
        } else {
          let splt = value.split(':');
          let prefix = splt[0];
          if (prefix in ontology['@context']) {
            target = splt.slice(1).join(':');
            href = (ontology['@context'][prefix]['@id'] || ontology['@context'][prefix]) + target;
            if (prop.charAt(0) === '@') {
              target = href;
            }
          } else {
            let base = ontology['@context']['@base'] || ontology['@context']['@vocab'];
            href = base + value;
            target = value;
          }
        }
        if ($a.tagName === 'A') {
          $a.setAttribute('href', href);
        }
        $a.textContent = target;
        $li.appendChild($a);
        $ul.appendChild($li);
      });
      $dd.appendChild($ul);
      $dl.appendChild($dd);
    });
    $li.appendChild($dl);

    $ul.appendChild($li);
  });
  $section.appendChild($ul);

  $article.appendChild($section);
});

let $main = document.querySelector('main');
$main.appendChild($article);

fs.writeFileSync(path.join(path.dirname(__dirname), 'index.html'), jsdom.serializeDocument(document), {encoding: 'utf8'});

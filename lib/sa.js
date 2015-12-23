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

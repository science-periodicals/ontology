var sa = require('..');
var assert = require('assert');
var prefixes = require('../prefixes');

describe('sa-ontology', function() {
  it('should be available as a JS object', function() {
    assert(sa.defines);
  });

  it('prefixes should be exposed', function() {
    assert(prefixes.scienceai);
  });
});

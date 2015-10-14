var fs = require('fs');
var path = require('path');

// module.exports = JSON.parse(fs.readFileSync(path.join(__dirname, 'article.jsonld')), 'utf8');
module.exports = require('./article.json');

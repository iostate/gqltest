const fetch = require('node-fetch')
// xml2js is an old tool that uses callbacks instead of promises
// use util to make xml2js into a prmise
const util = require('util')
const parseXML = util.promisify(require('xml2js').parseString)

const x = fetch(
    'https://www.goodreads.com/author/show.xml?id=4432&key=847J7cQqCf38AFoS9oZng'
).then(response => response.text())

x

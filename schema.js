const fetch = require('node-fetch')
const util = require('util')
require('util.promisify').shim()
const parseXML = util.promisify(require('xml2js').parseString)


const x = fetch(`https://www.goodreads.com/author/show.xml?id=4432&key=847J7cQqCf38AFoS9oZng`).then(response => response.text()).then(parseXML)

x

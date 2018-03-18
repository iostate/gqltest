const fetch = require('node-fetch')

const x = fetch(
    'https://www.goodreads.com/author/show.xml?id=4432&key=847J7cQqCf38AFoS9oZng'
).then(response => response.text())

x

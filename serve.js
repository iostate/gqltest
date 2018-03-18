const express = require('express')
const grapghqlHTTP = require('express-graphql')
const app = express()

const schema = require('./schema')

app.use('/graphql', grapghqlHTTP({
    graphiql: true
}))

app.listen(4000)

console.log('listening ...')

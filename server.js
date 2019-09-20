const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const cors = require('cors')

const app = express()

const PORT = process.ENV || 5000

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})

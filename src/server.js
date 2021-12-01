const { ApolloServer } = require('apollo-server')

const { context } = require('./context')
const { schema } = require('./schema')
const server = new ApolloServer({
  schema:schema,
  context: context
})

server.listen().then( (url) => {
 console.log(`\
🚀 Server ready at: ${url}
⭐️ See sample queries: http://pris.ly/e/js/graphql#using-the-graphql-api
  `)
})

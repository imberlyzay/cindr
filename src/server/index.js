const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql;


const resolvers = {
  Query: {
    users: () => users
  }
}

const url = 'localhost:3000'

const server = new ApolloServer({typeDefs, resolvers})
server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`)
})

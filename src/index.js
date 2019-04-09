const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hello xpress-apollo'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();
const port = process.env.PORT || 4000
server.applyMiddleware({ app });

app.get('/api', (req, res) => res.send({api: true}))

app.listen({ port }, () => {
  console.log(`server ready on port ${port} @ ${server.graphqlPath}`);
});

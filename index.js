const express = require("express");
/**
 * gql - тэг шаблона, использующийся для написания схемы GraphQL
 */
const { ApolloServer, gql } = require("apollo-server-express");

/**
 * В схеме должны быть указаны типы для чтения данных,
 * а также может иметь атрибуты, в которые вложены другие атрибуты
 */
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

/**
 * Используются для возврата данных из схемы
 */
const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
/**
 * для соединения express и ApolloServer
 */
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

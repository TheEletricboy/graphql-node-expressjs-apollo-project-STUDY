import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"; //starts apollo server without other backend framework

// #graphql comment is only to get graphql IDE syntax.
// it represents the interface to our API
const typeDefs = `#graphql
  schema {
    query: Query
  }

  type Query {
    greeting: String
  }
`;

// Resolver function because it resolves the value of the schema, it must be a function.
// This is the implementation of the API, they provide the code that knows how to return the actual values
const resolvers = {
  Query: {
    greeting: () => "Hello World",
  },
};

// A class who's constructor takes in a configurator object.
// -> typeDefs prop. So I used shorthand ES syntax.
// -> resolvers prop. same thing
const server = new ApolloServer({ typeDefs, resolvers });

// is an async func that take 2 args: the server and the port number obj.
// has a url value.
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Server running at ${url}`);

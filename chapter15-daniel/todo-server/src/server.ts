import express from "express";
import { createServer } from "http";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import typeDefs from "./gql/typeDefs";
import resolvers from "./gql/resolvers";

const app = express();
const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({
  schema: schema,
  context: ({ req, res }: any) => ({ req, res }),
});
apolloServer.applyMiddleware({ app, cors: false });

const httpServer = createServer(app);
httpServer.listen({ port: 8000 }, () => {
  console.log("GraphQL server ready." + apolloServer.graphqlPath);
});
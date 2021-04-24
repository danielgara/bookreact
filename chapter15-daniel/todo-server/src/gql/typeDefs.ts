import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Todo {
    id: ID!
    message: String!
  }
  type Query {
    getTodos: [Todo!]
  }
`;

export default typeDefs;
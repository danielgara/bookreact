import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    description: String
  }

  type Query {
    getUsers: [User!]
  }
`;

export default typeDefs;
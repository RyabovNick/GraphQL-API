import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Students {
    n_z: Int
    name: String
    surname: String
    date_birth: String
    n_group: Int
    score: Float
    city: String
    address: String
  }

  type Query {
    allStudents: [Students]
    student(n_z: Int!): Students
  }
`;

export default typeDefs;

import { values } from 'lodash';
import * as commonSchema from './type/common';
import * as userSchema from './type/user';

const Scalar = `
scalar Date
`;

const Schema = `
schema {
  query: Query
  mutation: Mutation
}
`;

const Query = `
type Query {
  test: String
}
`;

const Mutation = `
type Mutation {
  userLogin(input: UserLoginInput!): Me
}
`;

const schemas = [Scalar, Schema, Mutation, Query];

export default schemas.concat(
  values(commonSchema),
  values(userSchema)
).filter(schema => typeof schema !== "boolean");

import cors from "cors";
import graphqlHTTP from "express-graphql";
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLUpload } from 'graphql-upload';
import GraphQLTypeDef from '../schema';
import Query from './query';
import Mutation from './mutation';
import Resolver from './resolver';

console.log('Mutation', Mutation);

export function makeSchema() {
  return makeExecutableSchema({
    typeDefs: GraphQLTypeDef,
    resolvers: {
      ...Resolver,
      // Upload: GraphQLUpload,
      Query,
      Mutation
    }
  });
}

export default function useGraphQl(server: any) {
  server.use('/graphql', cors(), graphqlHTTP((req) => ({
    schema: makeSchema(),
    graphiql: true,
    fetchPolicy: 'no-cache',
    context: {
      ...req
    },
    customFormatErrorFn: (error) => {
      console.log("============= graphql error  ==============");
      console.log(error);
      return {
        message: error.message,
        locations: error.locations,
        stack: error.stack ? error.stack.split('\n') : [],
        path: error.path
      };
    }
  })));
}

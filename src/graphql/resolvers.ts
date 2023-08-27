import GraphQLJSON from 'graphql-type-json';
import { GraphQLDateTime } from 'graphql-iso-date';
import db from '../modules/db.js';

const resolvers = {
  DateTime: GraphQLDateTime,
  JSON: GraphQLJSON,

  Query: {
    submissions: () => {
      db.submission.findMany({ orderBy: { submittedAt: 'desc' }});
    },
  },
};

export default resolvers;
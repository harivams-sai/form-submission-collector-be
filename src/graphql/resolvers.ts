import GraphQLJSON from 'graphql-type-json';
import { GraphQLDateTime } from 'graphql-iso-date';
import db from '../modules/db.js';
import { enqueue } from '../modules/queue.js';
import { times } from 'lodash';

const resolvers = {
  DateTime: GraphQLDateTime,
  JSON: GraphQLJSON,

  Query: {
    submissions: () => {
      return db.submission.findMany({ orderBy: { submittedAt: 'desc' }});
    },
  },

  Mutation: {
    queueSubmissionGeneration: async (_, { count }: { count: number }) => {
      await Promise.all(
        times(count ?? 1).map(async () => {
          await enqueue('generateSubmissions');
        })
      );
      return true;
    },
  },
};

export default resolvers;
import { createSchema } from 'graphql-yoga';

export const schema = createSchema({
  typeDefs: `
      type Query {
        init: String!
      }
    `,
  resolvers: {
    Query: {
      init: () => '서버 시작'
    }
  }
});

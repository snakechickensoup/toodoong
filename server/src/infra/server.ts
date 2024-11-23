import { serve } from '@hono/node-server';
import { createYoga } from 'graphql-yoga';
import { Hono } from 'hono';

import { schema } from '../interfaces/graphql/schema.js';

export const createServer = (port: number = 4000) => {
  const app = new Hono();

  const yoga = createYoga({
    schema: schema,
    graphiql: true
  });

  app.use('/graphql', async (c) => {
    const response = await yoga.handle(c.req.raw, {});
    return response;
  });

  const startServer = () => {
    return serve({
      fetch: app.fetch,
      port
    });
  };

  return {
    app,
    startServer
  };
};

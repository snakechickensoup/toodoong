import { createServer } from './infra/server.js';

const { startServer } = createServer(4000);
startServer();

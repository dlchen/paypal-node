'use strict';

const Hapi = require('hapi');
const Database = require('../api/mockDb');

const server = Hapi.server({
  port: 8000,
  host: 'localhost',
  routes: { log: { collect: true } }
});

server.route({
  method: 'GET',
  path: '/v1/transactions',
  handler: async (request, h) => {

    const db = new Database();
    const page = request.query.page || 0;
    try {
      const transactions = await db.query({ page });
      return transactions;
    }
    catch (error) {
      request.log(['error'], { error });
      return h.response({ statusCode: 500 });
    }
  }
});

server.events.on({ name: 'request', channels: 'app' }, (request, event, tags) => {

  if (tags.error) {
    console.log(event);
  }
});

const init = async () => {

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();

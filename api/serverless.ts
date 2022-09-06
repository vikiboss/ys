import * as dotenv from 'dotenv';
dotenv.config();

import fastify, { FastifyReply, FastifyRequest } from 'fastify';

const app = fastify({ logger: false }).register(import('../src/app'));

export default async (req: FastifyRequest, res: FastifyReply) => {
  await app.ready();
  app.server.emit('request', req, res);
};

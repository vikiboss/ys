import {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  FastifyServerOptions,
} from 'fastify';

import roles from './roles.json';

export default async function App(
  app: FastifyInstance,
  opts: FastifyServerOptions,
  done: DoneFuncWithErrOrRes
) {
  app.get('/roles', async () => ({ status: 0, data: roles, msg: '获取成功' }));

  done();
}

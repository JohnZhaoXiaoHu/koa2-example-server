import * as Koa from 'koa';

module.exports = async (ctx: Koa.Context, next: Function) => {
  ctx.status = 404;
  ctx.body = {code: ctx.status, data: {error: 'Endpoint not found'}};
  return ctx.body;
};

import * as Koa from 'koa';
const Route = require('koa-route');

export class HealthRoute {
  private app: Koa;

  constructor(app: Koa) {
    this.app = app;

    this.attachRoutes();
  }

  private attachRoutes(): void {
    this.app.use(Route.get('/health', this.healthCheck));
  }

  public async healthCheck(ctx: Koa.Context): Promise<any> {
    ctx.body = {code: 200};
  }
}

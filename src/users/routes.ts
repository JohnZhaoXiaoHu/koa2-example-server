import * as Koa from 'koa';
const Route = require('koa-route');

import {User} from './user';

export class UserRoutes {
  private app: Koa;

  constructor(app: Koa) {
    this.app = app;

    this.attachRoutes();
  }

  private attachRoutes(): void {
    this.app.use(Route.get('/api/user', this.findUser));
  }

  public async findUser(ctx: Koa.Context): Promise<any> {
    const userController = new User(ctx);
    const foundUser = await userController.findUser();

    ctx.body = 'hello worlds';
  }
}

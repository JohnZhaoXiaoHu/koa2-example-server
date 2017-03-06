import * as Koa from 'koa';

export class User {

  private ctx: Koa.Context;

  constructor(ctx: Koa.Context) {
    this.ctx = ctx;
  }

  public findUser(): Promise<any> {
     return new Promise<any>((resolve, reject) => {
      return resolve(true);
    });
  }
}

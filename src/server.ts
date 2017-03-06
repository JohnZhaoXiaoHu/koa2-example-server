import * as Koa from 'koa';

const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const responseTime = require('koa-response-time');
const helmet = require('koa-helmet');
const multer = require('koa-multer');
const compress = require('koa-compress');

const errorHandler = require('./error-handler');

import {UserRoutes} from './users/routes';

export class Server {

  public app: Koa;
  public PORT: number = process.env.PORT || 3000;

  public userRoutes: UserRoutes;

  constructor() {
    this.app = new Koa();

    this.config();
  }

  /**
   * Configure the express app.
   */
  private config(): void {

    this.initMiddleware();

    this.initRoutes();
  }

  private initMiddleware(): void {
    this.app.use(compress());
    this.app.use(cors());
    this.app.use(responseTime());
    this.app.use(logger());
    this.app.use(helmet());

    this.app.use(bodyParser({
      onerror: (err: Error, ctx: Koa.Context) => {
        ctx.throw('Error parsing the body information', 422);
      }
    }));
  }

  /**
   * Initialize routes and set default behaviors
   */
  private initRoutes(): void {
    this.userRoutes = new UserRoutes(this.app);

    // Error Handler at the end
    this.app.use(errorHandler);
  }

  /**
   * Start the server
   */
  public start(): void {
    this.app.listen(this.PORT);
    console.log(`Listening on ${this.PORT}`);
  }

}

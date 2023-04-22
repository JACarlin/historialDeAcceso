import express, { Application } from 'express';
import { IController } from './Controllers/Controller';

export default class AppBuilder {
  private app: Application;

  public constructor() {
    this.app = express();
    this.app.use(express.json());
  }
  public getApp(): Application {
    return this.app;
  }

  public registrarController(controller: IController): AppBuilder {
    const { basePath, router } = controller;
    this.app.use(basePath, router);
    return this;
  }
}
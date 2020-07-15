import express, { Express } from "express";
import cors from "cors";
import routes from "./routes";
import "./database";

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  public middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  public routes(): void {
    this.app.use(routes);
  }
}

export default new App().app;

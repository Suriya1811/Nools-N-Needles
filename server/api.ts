import express from "express";
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

let initialized = false;

export default async function handler(req: any, res: any) {
  if (!initialized) {
    await registerRoutes(app);
    initialized = true;
  }
  return app(req, res);
}

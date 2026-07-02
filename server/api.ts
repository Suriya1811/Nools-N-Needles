import express from "express";
import { registerRoutes } from "./routes";

const app = express();

app.use((req, res, next) => {
  if (req.body) return next();
  express.json({ limit: '50mb' })(req, res, next);
});

app.use((req, res, next) => {
  if (req.body) return next();
  express.urlencoded({ extended: false, limit: '50mb' })(req, res, next);
});

let initialized = false;

export default async function handler(req: any, res: any) {
  if (!initialized) {
    await registerRoutes(app);
    initialized = true;
  }
  return app(req, res);
}

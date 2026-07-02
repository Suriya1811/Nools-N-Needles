import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProductSchema, insertCategorySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "Riya" && password === "Riya@1811") {
      res.json({ success: true, token: "admin-token-1811" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });

  const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader === "Bearer admin-token-1811") {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };

  app.get("/api/products", async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get("/api/products/:id", async (req, res) => {
    const product = await storage.getProduct(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  });

  app.post("/api/products", requireAuth, async (req, res) => {
    try {
      const parsed = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(parsed);
      res.json(product);
    } catch (e: any) {
      res.status(400).json({ error: e.errors || e.message });
    }
  });

  app.put("/api/products/:id", requireAuth, async (req, res) => {
    try {
      const parsed = insertProductSchema.partial().parse(req.body);
      const product = await storage.updateProduct(req.params.id, parsed);
      if (!product) return res.status(404).json({ message: "Not found" });
      res.json(product);
    } catch (e: any) {
      res.status(400).json({ error: e.errors || e.message });
    }
  });

  app.delete("/api/products/:id", requireAuth, async (req, res) => {
    const success = await storage.deleteProduct(req.params.id);
    if (!success) return res.status(404).json({ message: "Not found" });
    res.json({ success: true });
  });

  app.get("/api/categories", async (req, res) => {
    const categories = await storage.getCategories();
    res.json(categories);
  });

  app.post("/api/categories", requireAuth, async (req, res) => {
    try {
      const parsed = insertCategorySchema.parse(req.body);
      const category = await storage.createCategory(parsed);
      res.json(category);
    } catch (e: any) {
      res.status(400).json({ error: e.errors || e.message });
    }
  });

  app.delete("/api/categories/:id", requireAuth, async (req, res) => {
    const success = await storage.deleteCategory(req.params.id);
    if (!success) return res.status(404).json({ message: "Not found" });
    res.json({ success: true });
  });

  const httpServer = createServer(app);
  return httpServer;
}

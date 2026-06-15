import { Router } from "express";
import { CategoryController } from "./category.controller";
import { authMiddleware } from "../auth/auth.middleware";

const router = Router();

router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.getById);

// Rotas protegidas
router.post("/", authMiddleware, CategoryController.create);
router.put("/:id", authMiddleware, CategoryController.update);
router.delete("/:id", authMiddleware, CategoryController.delete);

export default router;
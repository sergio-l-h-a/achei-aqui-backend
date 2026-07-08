import { Router } from "express";
import { BusinessController } from "./business.controller";
import { authMiddleware } from "../auth/auth.middleware";

const router = Router();

router.get("/", BusinessController.getAll);
router.get("/:id", BusinessController.getById);
router.get("/category/:category_id", BusinessController.getByCategory);

// Rotas protegidas
router.post("/", authMiddleware, BusinessController.create);
router.put("/:id", authMiddleware, BusinessController.update);
router.delete("/:id", authMiddleware, BusinessController.delete);

export default router;

//
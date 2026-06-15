import { Router } from "express";
import authRoutes from "../auth/auth.routes";
import categoryRoutes from "../categories/category.routes";
import businessRoutes from "../business/business.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/categories", categoryRoutes);
router.use("/business", businessRoutes);

router.get("/", (req, res) => {
    res.json({ message: "API Achei Aqui funcionando" });
});

export default router;
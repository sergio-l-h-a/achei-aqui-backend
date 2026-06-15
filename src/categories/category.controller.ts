import { Request, Response } from "express";
import { CategoryService } from "./category.service";

export class CategoryController {
    static async getAll(req: Request, res: Response) {
        const categories = await CategoryService.getAll();
        res.json(categories);
    }

    static async getById(req: Request, res: Response) {
        const id = Number(req.params.id);
        const category = await CategoryService.getById(id);
        res.json(category);
    }

    static async create(req: Request, res: Response) {
        const { name, icon } = req.body;
        const result = await CategoryService.create(name, icon);
        res.json(result);
    }

    static async update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const { name, icon } = req.body;
        const result = await CategoryService.update(id, name, icon);
        res.json(result);
    }

    static async delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        const result = await CategoryService.delete(id);
        res.json(result);
    }
}
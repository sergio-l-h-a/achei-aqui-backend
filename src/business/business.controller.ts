import { Request, Response } from "express";
import { BusinessService } from "./business.service";

export class BusinessController {
    static async getAll(req: Request, res: Response) {
        const result = await BusinessService.getAll();
        res.json(result);
    }

    static async getById(req: Request, res: Response) {
        const id = Number(req.params.id);
        const result = await BusinessService.getById(id);
        res.json(result);
    }

    static async getByCategory(req: Request, res: Response) {
        const category_id = Number(req.params.category_id);
        const result = await BusinessService.getByCategory(category_id);
        res.json(result);
    }

    static async create(req: Request, res: Response) {
        const user_id = (req as any).user.id;
        const result = await BusinessService.create(req.body, user_id);
        res.json(result);
    }

    static async update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const user_id = (req as any).user.id;
        const result = await BusinessService.update(id, req.body, user_id);
        res.json(result);
    }

    static async delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        const user_id = (req as any).user.id;
        const result = await BusinessService.delete(id, user_id);
        res.json(result);
    }
}
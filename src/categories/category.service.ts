import { db } from "../config/database";

export class CategoryService {
    static async getAll() {
        const [rows]: any = await db.query("SELECT * FROM categories");
        return rows;
    }

    static async getById(id: number) {
        const [rows]: any = await db.query("SELECT *  FROM categories WHERE id = ?", [id]);
        return rows[0];
    }

    static async create(name: string, icon?: string) {
        await db.query("INSERT INTO categories (name, icon) VALUES (?, ?", [name, icon || null]);
        return { message: "Categoria criada com sucesso" };
    }

    static async update(id: number, name: string, icon?: string) {
        await db.query("UPDATE categories SET name = ?, icon = ? WHERE id = ?", [name, icon || null, id]);
        return { message: "Categoria atualizada com sucesso" };
    }

    static async delete(id: number) {
        await db.query("DELETE FROM categories WHERE id = ?", [id]);
        return { message: "Categoria removida com sucesso" };
    }
}
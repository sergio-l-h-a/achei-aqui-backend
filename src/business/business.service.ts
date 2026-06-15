import { db } from "../config/database";

export class BusinessService {
    static async getAll() {
        const [rows]: any = await db.query(`
            SELECT b.*, c.name AS category_name FROM business b JOIN categories c ON c.id = b.category_id`);
            return rows;
    }

    static async getById(id: number) {
        const [rows]: any = await db.query(`SELECT b.*, c.name AS category_name FROM business b JOIN categories c ON c.id = b.category_id WHERE b.id = ?`, [id]);
        return rows[0];
    }

    static async getByCategory(category_id: number) {
        const [rows]: any = await db.query("SELECT * FROM business WHERE category_id = ?", [category_id]);

        return rows;
    }

    static async create(data: any, user_id: number) {
        const { name, description, category_id, address, whatsapp, image_url, schedule } = data;
        await db.query(`INSERT INTO business (name, description, category_id, address, whatsapp, image_url, schedule, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [name, description, category_id, address, whatsapp, image_url, schedule, user_id]);

        return { message: "Negócio creado com sucesso" };
    }

    static async update(id: number, data: any, user_id: number) {
        const { name, description, category_id, address, whatsapp, image_url, schedule } = data;
        await db.query(`UPDATE business SET name = ?, description = ?, category_id = ?, address = ?, whatsapp = ?, image_url = ?, schedule = ? WHERE id = ? AND user_id = ?`, [name, description, category_id, address, whatsapp, image_url, schedule, id, user_id]);

        return { message: "Negócio atualizado com sucesso" };
    }

    static async delete(id: number, user_id: number) {
        await db.query("DELETE FROM business WHERE id = ? AND user_id = ?", [id, user_id]);

        return { message: "Negócio removido com sucesso" };
    }
}
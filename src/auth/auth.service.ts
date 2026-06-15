import { db } from "../config/database";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";

export class AuthService {
    static async register(name:string, email:string, password:string){
        const [userExists]: any = await db.query(
            "SELECT * FROM users WHERE email = ?", [email]
        );

        if (userExists.length > 0) {
            throw new Error("Email já cadastrado");
        }

        const password_hash = await bcrypt.hash(password, 10);

        await db.query(
            "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)", [name, email, password_hash]
        );

        return { message: "Usuário cadastrado com sucesso"};
    }

    static async login(email:string, password:string) {
        const [rows]: any = await db.query(
            "SELECT * FROM users WHERE email = ?", [email]
        );

        const user = rows[0];

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        const validPassword = await bcrypt.compare(password, user.password_hash);

        if (!validPassword) {
            throw new Error("Senha incorreta");
        }

        const token = jwt.sign(
            {id: user.id, email: user.email},
            process.env.JWT_SECRET as string,
            { expiresIn: "7d"}
        );

        return {token, user:{id:user.id, name:user.name, email: user.email}};
    }
}
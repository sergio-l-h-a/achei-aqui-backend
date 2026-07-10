import express from "express";
import cors from "cors";
import routes from "./routes";
import path from "node:path";

const app = express();

app.use(cors({
    origin: "https://achei-aqui-frontend.vercel.app",   // domínio principal
   
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use(routes);

// permite acessar a pasta de imagens
app.use("/imagens", express.static(path.join(__dirname, "imagens")));

export default app;
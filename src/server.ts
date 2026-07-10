// import app from "./app";

// const PORT = 3333;

// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });

import app from "./app";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
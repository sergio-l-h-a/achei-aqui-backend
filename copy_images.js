const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "src", "imagens");
const dest = path.join(__dirname, "dist", "imagens");

// Garante que dist existe
const distRoot = path.join(__dirname, "dist");
if (!fs.existsSync(distRoot)) {
  fs.mkdirSync(distRoot, { recursive: true });
}

// Se a pasta src/imagens não existir, não quebra o build
if (!fs.existsSync(src)) {
  console.log("Pasta src/imagens não encontrada. Nada para copiar.");
  process.exit(0);
}

fs.mkdirSync(dest, { recursive: true });

fs.readdirSync(src).forEach(file => {
  fs.copyFileSync(path.join(src, file), path.join(dest, file));
});

console.log("Imagens copiadas para dist/imagens");

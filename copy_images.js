const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "src", "imagens");
const dest = path.join(__dirname, "dist", "imagens");

fs.mkdirSync(dest, { recursive: true });

fs.readdirSync(src).forEach(file => {
  fs.copyFileSync(path.join(src, file), path.join(dest, file));
});

console.log("Imagens copiadas para dist/imagens");

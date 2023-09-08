//import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor escutando!");
});

// const rotas = {
//   "/": "Curso de Express API",
//   "/livros": "Rota Livros",
//   "/autores": "Rota Autores",
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(rotas[req.url]);
// });

// server.listen(PORT, () => {
//   console.log("Servidor escutando!");
// });

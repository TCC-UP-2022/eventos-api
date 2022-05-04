import express from "express";
import morgan from "morgan";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on(
  "error",
  console.log.bind(console, "Erro ao conectar no Banco de Dados:")
);
db.once("open", () => {
  console.log("Conexão com o Banco de Dados estabelecida com sucesso!");
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
routes(app);


export default app;

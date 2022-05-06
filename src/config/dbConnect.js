import mongoose from "mongoose";
/**SUBISTITUIR PARA VARIAVEL DE AMBIENTE**/
mongoose.connect(
  `mongodb+srv://admin:admin@eventos.kdtxx.mongodb.net/eventos?`,
  {
    useNewUrlParser: true,
  }
);

let db = mongoose.connection;

export default db;

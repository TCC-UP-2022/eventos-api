import mongoose from "mongoose";

const docenteSchema = new mongoose.Schema({
  usuario: { type: String, required: true } /**USUARIO**/,
});

const docente = mongoose.model("alunos", docenteSchema);

export default docente;

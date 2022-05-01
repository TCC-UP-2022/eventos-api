import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema({
  usuario: { type: String, required: true } /**USUARIO**/,
});

const aluno = mongoose.model("alunos", alunoSchema);

export default aluno;

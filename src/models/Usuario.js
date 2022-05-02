import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  senha: { type: String, select: false, minlength: 6, required: true },
  docente: { type: Boolean, default: false },
});

const usuario = mongoose.model("usuarios", usuarioSchema);

export default usuario;
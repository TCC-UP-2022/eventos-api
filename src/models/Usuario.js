import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  senha: { type: String, select: false, minlength: 6, required: true },
  docente: { type: Boolean, default: false },
  resetSenhaToken: { type: String, select: false },
  resetSenhaExpires: { type: Date, select: false },
});


usuarioSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();
});


const usuario = mongoose.model("usuarios", usuarioSchema);

export default usuario;
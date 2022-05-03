import mongoose from "mongoose";

const CategoriaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
});

const categoria = mongoose.model("categorias", CategoriaSchema);

export default categoria;

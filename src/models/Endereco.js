import mongoose from "mongoose";

const enderecoSchema = new mongoose.Schema({
  cep: { type: String, required: true },
  estado: { type: String, required: true },
  cidade: { type: String, required: true },
  bairro: { type: String, required: true },
  logradouro: { type: String, required: true },
  numero: { type: String, required: true },
  complemento: { type: String },
});

const endereco = mongoose.model("enderecos", enderecoSchema);

export default endereco;
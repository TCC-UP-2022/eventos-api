import mongoose from "mongoose";

const fotoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  evento: { type: mongoose.Schema.Types.ObjectId, ref: 'evento', required: true } /**EVENTO**/,
  foto: { type: String, required: true } /**url**/,
  banner: { type: Boolean, default: false}
});

const foto = mongoose.model("fotos", fotoSchema);

export default foto;

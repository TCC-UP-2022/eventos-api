import mongoose from "mongoose";
const appUrl = process.env.APP_URL;

const fotoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  evento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "evento",
    required: true,
  } /**EVENTO**/,
  foto: { type: String } /**url**/,
  banner: { type: Boolean, default: false },
});

fotoSchema.pre("save", function () {
  if (!this.path) {
    this.path = `${appUrl}/${this.foto}`;
  }
});
  
const foto = mongoose.model("fotos", fotoSchema);

export default foto;

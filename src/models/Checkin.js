import mongoose from "mongoose";

const checkinSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuario",
    required: true,
  } /**USUARIO ALUNO**/,
  evento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "evento",
    required: true,
  } /**EVENTO**/,
});

const checkin = mongoose.model("checkins", checkinSchema);

export default checkin;

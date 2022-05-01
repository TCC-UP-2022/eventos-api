import mongoose from "mongoose";

const checkinSchema = new mongoose.Schema({
  aluno: { type: String, required: true }, /**ALUNO**/
  evento: { type: String, required: true } /**EVENTO**/
});

const checkin = mongoose.model("checkins", checkinSchema);

export default checkin;

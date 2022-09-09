const mongoose = require("mongoose");

const DemandeSchema = mongoose.Schema({
  date: { type: Date, default: Date.now() },
  aquisation: { type: String },
  name: { type: String },
  CIN: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: ["leave request", "salary advance request", "payslip request"],
  },
  periode: String,
  avance: String,
  etat: {
    type: String,
    required: true,
    enum: ["validé", "non validé", "en attente"],
    default: "en attente",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
  },
});
module.exports = mongoose.model("Demande", DemandeSchema);

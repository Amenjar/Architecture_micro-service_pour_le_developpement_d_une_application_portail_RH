const mongoose = require("mongoose");

const BulletinDePaie = mongoose.Schema({
  CIN: { type: String, required: true, unique: true },
  salaireBrut: String,
  NomEtPrénom: String,
  Adresse: String,
  NetPayer: String,
  salaireNetImposable: String,
  PlafondSS: String,
  Emploi: String,
});
module.exports = mongoose.model("Bulletin", BulletinDePaie);

const express = require("express");
const {
  ajoutDemande,
  getDemande,
  editDemande,
  deleteDemande,
} = require("../controllers/Demande");
const { isAuth } = require("../middlewares/isAuth");

const DemandeRoute = express.Router();

DemandeRoute.post("/ajoutDemande", isAuth, ajoutDemande);
DemandeRoute.get("/demandes", isAuth, getDemande);
DemandeRoute.put("/modifierDemande/:id", isAuth, editDemande);
DemandeRoute.delete("/deleteDemande/:id", isAuth, deleteDemande);

module.exports = DemandeRoute;

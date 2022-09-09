const DemandeSchema = require("../models/Demande");

exports.ajoutDemande = async (req, res) => {
  const { date, aquisation, name, CIN, type, etat, periode, avance } = req.body;
  try {
    const demande = new DemandeSchema({ ...req.body, userId: req.user._id });
    await demande.save();
    res.status(200).send({ msg: "demande ajouté", demande });
  } catch (error) {
    res.status(500).send({ msg: "could not add demande", error });
  }
};

exports.getDemande = async (req, res) => {
  try {
    const listofDemande = await DemandeSchema.find();
    res.status(200).send({ msg: "list of demand", listofDemande });
  } catch (error) {
    res.status(500).send({ msg: "could not get list of demand", error });
  }
};
exports.editDemande = async (req, res) => {
  const { id } = req.params;
  try {
    const DemandeUpdated = await DemandeSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).send({ msg: "Demande Updated", DemandeUpdated });
  } catch (error) {
    res.status(500).send({ msg: "could not update demand", error });
  }
};
exports.deleteDemande = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteDemande = await DemandeSchema.findByIdAndDelete(id);
    res.status(200).send({ msg: "Demande deleted", deleteDemande });
  } catch (error) {
    res.status(500).send({ msg: "could not delete Demande", error });
  }
};

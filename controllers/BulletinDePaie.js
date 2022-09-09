const UserSchema = require("../models/Auth");

const BulletinDePaie = require("../models/BulletinDePaie");

exports.CreatePayslip = async (req, res) => {
  try {
    const adminRH = await UserSchema.findById(req.user._id);
    if (adminRH.role === "Admin RH") {
      const Payslip = new BulletinDePaie(req.body);
      await Payslip.save();
      res.status(200).send({ msg: "new Payslip", Payslip });
    }
  } catch (error) {
    res.status(500).send({ msg: "could not create Payslip", error });
  }
};

exports.deletePayslip = async (req, res) => {
  const { id } = req.params;
  try {
    const PayslipDeleted = await BulletinDePaie.findByIdAndDelete(id);
    res.status(200).send({ msg: "Payslip deleted", PayslipDeleted });
  } catch (error) {
    res.status(500).Send({ msg: "could not delete Payslip" }, error);
  }
};
exports.getPayslip = async (req, res) => {
  try {
    ListOfPayslip = await BulletinDePaie.find();
    res.status(200).send({ msg: "List of Payslip", ListOfPayslip });
  } catch (error) {
    res.status(500).send({ msg: "could not get Payslips", error });
  }
};

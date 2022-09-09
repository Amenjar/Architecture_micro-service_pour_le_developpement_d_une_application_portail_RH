const express = require("express");
const {
  CreatePayslip,
  getPayslip,
  deletePayslip,
} = require("../controllers/BulletinDePaie");
const { isAuth } = require("../middlewares/isAuth");

const PayslipRoute = express.Router();

PayslipRoute.post("/addPayslip", isAuth, CreatePayslip);
PayslipRoute.get("/Payslips", isAuth, getPayslip);
PayslipRoute.delete("/deletePayslip/:id", isAuth, deletePayslip);

module.exports = PayslipRoute;

const express = require("express");
const {
  SignUp,
  SignIn,
  getAdminRH,
  deleteEmployers,
  updateEmployers,
} = require("../controllers/Auth");
const { isAuth } = require("../middlewares/isAuth");
const {
  RegisterValidation,
  Validation,
  LoginValidation,
} = require("../middlewares/Register");

const AuthRoute = express.Router();
AuthRoute.post("/signUp", RegisterValidation, Validation, SignUp);
AuthRoute.post("/signIn", LoginValidation, Validation, SignIn);
AuthRoute.get("/current", isAuth, (req, res) => res.send(req.user));
AuthRoute.get("/AdminRH", isAuth, getAdminRH);
AuthRoute.delete("/deleteEmployers/:id", isAuth, deleteEmployers);
AuthRoute.put("/updateEmployers/:id", isAuth, updateEmployers);
module.exports = AuthRoute;

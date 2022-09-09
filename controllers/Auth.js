const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = require("../models/Auth");

exports.SignUp = async (req, res) => {
  const { name, email, password, description, salaire, picture } = req.body;
  try {
    const User = new UserSchema(req.body);
    // verify email
    const foundUser = await UserSchema.findOne({ email });
    if (foundUser) {
      res.status(400).send({ msg: "user already exists" });
    }
    // crypt password
    const salt = 10;
    const passwordhashed = bcrypt.hashSync(password, salt);
    User.password = passwordhashed;
    // generate token

    // send new User
    await User.save();
    res.status(200).send({ msg: "add with success", User });
  } catch (error) {
    res.status(500).send({ msg: "could not add user", error });
  }
};
exports.SignIn = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const found = await UserSchema.findOne({ email });
    //verify email if true or no
    if (!found) {
      return res.status(400).send({ errors: [{ msg: "bad credentials" }] });
    }
    // validation password
    const match = await bcrypt.compare(password, found.password);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "bad credentials" }] });
    }
    // generate token
    const payload = { id: found._id };
    const token = jwt.sign(payload, "Secret");
    //login
    res.status(200).send({ msg: "login with succes", found, token });
  } catch (error) {
    res.status(500).send({ msg: "could not login", error });
  }
};
exports.getAdminRH = async (req, res) => {
  try {
    const Employers = await UserSchema.find();
    res.status(200).send({ msg: "list of Employers", Employers });
  } catch (error) {
    res.status(500).send({ msg: "could not get list of Employers" });
  }
};
exports.deleteEmployers = async (req, res) => {
  const { id } = req.params;
  try {
    const EmloyerDeleted = await UserSchema.findByIdAndDelete(id);
    res.status(200).send({ msg: "Emloyer deleted", EmloyerDeleted });
  } catch (error) {
    res.status(500).send({ msg: "could not deleted emloyer", error });
  }
};
exports.updateEmployers = async (req, res) => {
  const { id } = req.params;
  try {
    const EmployerUpdated = await UserSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).send({ msg: "user updated", EmployerUpdated });
  } catch (error) {
    res.status(500).send({ msg: "could not update", error });
  }
};

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  cin: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  description: { type: String, required: true },
  salaire: { type: String, required: true },
  periode_conge: { type: String, required: true },

  picture: String,
  role: {
    type: String,
    enum: ["Employée", "Admin App", "Admin RH"],
    default: "Employée",
  },
});
module.exports = mongoose.model("user", UserSchema);

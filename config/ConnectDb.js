const mongoose = require("mongoose");
require("dotenv").config();
const ConnectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/PFA");
    console.log("Db is connected");
  } catch (error) {
    console.log("db is not connected");
  }
};
module.exports = ConnectDb;

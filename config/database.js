const mongoose = require("mongoose");

//1. Conectar la base de dato

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/petshop")
    .then(() => {
      console.log("Conectado a la base de datos");
    })
    .catch(() => {
      console.error("Error");
    });
};

module.exports = connectDB;

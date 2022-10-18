const carritoModel = require("../models/carrito");
const connectDB = require("../config/database");

connectDB()

carritoModel.create(
    {
        metodoDePago: "Efectivo",
        fechaCompra: new Date().toISOString(),
        total: 52000.00,
        cliente: "634f12502c6854060c38a080"
    }
).then(() => {
    console.log("Registro correcto");
  })
  .catch(() => {
    console.error("Error");
  });
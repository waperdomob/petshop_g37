const mongoose = require("mongoose");

//1. Declarar el esquema de la entidad o modelo  a implementar
const carritoSchema = new mongoose.Schema({
  metodoDePago: String,
  fechaCompra: Date,
  total: Number,
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuario"
  },
});

const carritoModel = mongoose.model("carrito", carritoSchema);

module.exports = carritoModel;

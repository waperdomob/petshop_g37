const mongoose = require("mongoose");

//1. Declarar el esquema de la entidad o modelo  a implementar
const usuarioSchema = new mongoose.Schema({
  tipoDocumento: String,
  documento: {
    type: String,
    unique: true,
    required: [true, "¡El documento es obligatorio!"],
  },
  fechaConexion: Date,
  email: String,
  password: String,
  edad: Number,
  telefono: String,
  tipo: {type: String, enum:["administrador","cliente"]},
  nombres: {
    nombre: String,
    apellido: String,
  },
});

//2. Crear el modelo usando el Schema
const UsuarioModel = mongoose.model("usuario", usuarioSchema);

module.exports = UsuarioModel;

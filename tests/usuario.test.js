const UsuarioModel = require("../models/usuario");
const connectDB = require("../config/database")

connectDB()
UsuarioModel.create(
    {
        tipoDocumento: "Cedula de ciudadania",
        documento: "98456",
        fechaConexion: new Date().toISOString(),
        email: "48wqes@email.com",
        password: "123456",
        edad: 29,
        telefono: "6518151",
        nombres: {
          nombre: "Yilber",
          apellido: "Perdomo",
        },
      }
).then(() => {
    console.log("Registro correcto");
  })
  .catch(() => {
    console.error("Error");
  });
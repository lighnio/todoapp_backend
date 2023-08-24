const mongoose = require("mongoose");
require("dotenv").config();

let uri;

if (process.env.NODE_ENV == "development") {
  uri = process.env.DB_DEV_URI;

  mongoose
    .connect(uri, {})
    .then(() => {
      console.log("Conexión a la base de datos LOCAL exitosa :D");
    })
    .catch((err) => {
      console.error("Error al conectarse a la base de datos D:  :", err);
    });
} else {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conexión a la base de datos NUBE exitosa :D");
    })
    .catch((err) => {
      console.error("Error al conectarse a la base de datos D:  :", err);
    });
}

module.exports = mongoose;

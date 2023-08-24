const express = require("express");
const userRoutes = require("./routes/routes");

require("./database/mongodb");
require("dotenv").config();

const app = express();
const cors = require("cors");

app.use(express.json());

app.use("/api", userRoutes);

app.use(cors());

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`Servidor iniciado en el puerto ${app.get("port")}`);
});

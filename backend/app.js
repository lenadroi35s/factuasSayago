const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const routerFacturas = require("./routers/routers");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerFacturas);

const PORT = 3676;

const URL = "mongodb://127.0.0.1:27017/Facturero";

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});


mongoose
  .connect(URL, {})
  .then(() => {
    console.log("enviado");
  })
  .catch((err) => {
    console.log(err);
  });

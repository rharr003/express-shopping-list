const express = require("express");
const app = express();
const itemRoutes = require("./item-routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/items", itemRoutes);

module.exports = app;

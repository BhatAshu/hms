const express = require("express");
const apiHandler = require("./src/controllers/apiHandler")

module.exports = (app) => {
    app.use(express.json());
    app.use("/api/hbms",apiHandler);
}
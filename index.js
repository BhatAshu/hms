const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));


const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/HospitalLab");
const con = mongoose.connection;
con.on("open", () => {
  console.log("Database connected successfully");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes")(app);



app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

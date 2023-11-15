const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const productsRpouter = require("./routes/productsRoute");
dotenv.config({ path: './.env' });
const app = express();
app.use(bodyParser.json());
app.use(cors());
console.log(process.env.DATABASE)
mongoose.connect(process.env.DATABASE).then(() => {
  console.log("Db is Connected");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/", productsRpouter);

app.all("*", (req,res) => {
    res.status(404).json("Page not Found")
})

app.listen(5000, () => {
  console.log(`Server is running at port 5000`);
});

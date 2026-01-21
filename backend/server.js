const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const blueprintRoutes = require("./routes/blueprintRoutes");
const contractRoutes = require("./routes/contractRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// 👉 Replace this with your MongoDB URL
mongoose.connect("mongodb+srv://harshadaajagtap13_db_user:lQRq8ZRqJZIxAIGv@cluster0.hxsxoch.mongodb.net/?appName=Cluster0")
.then(()=>console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/blueprints", blueprintRoutes);
app.use("/api/contracts", contractRoutes);

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});

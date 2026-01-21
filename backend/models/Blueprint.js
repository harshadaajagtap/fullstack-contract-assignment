const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  type: String,
  label: String,
  position: { x: Number, y: Number }
});

const blueprintSchema = new mongoose.Schema({
  name: String,
  fields: [fieldSchema]
});

module.exports = mongoose.model("Blueprint", blueprintSchema);

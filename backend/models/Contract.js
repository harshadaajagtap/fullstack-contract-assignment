const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema({
  name: String,
  blueprintId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blueprint"
  },
  fields: [{
    label: String,
    type: String,
    value: String
  }],
  status: {
    type: String,
    enum: ["Created","Approved","Sent","Signed","Locked","Revoked"],
    default: "Created"
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Contract", contractSchema);

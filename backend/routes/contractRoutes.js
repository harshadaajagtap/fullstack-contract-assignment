const express = require("express");
const router = express.Router();
const Contract = require("../models/Contract");
const Blueprint = require("../models/Blueprint");

// Lifecycle Rules
function validTransition(current, next) {
  const rules = {
    Created: ["Approved","Revoked"],
    Approved: ["Sent"],
    Sent: ["Signed","Revoked"],
    Signed: ["Locked"],
    Locked: [],
    Revoked: []
  };
  return rules[current].includes(next);
}

// Create Contract from Blueprint
router.post("/", async (req,res)=>{
  const blueprint = await Blueprint.findById(req.body.blueprintId);

  const fields = blueprint.fields.map(f => ({
    label: f.label,
    type: f.type,
    value: ""
  }));

  const contract = await Contract.create({
    name: req.body.name,
    blueprintId: blueprint._id,
    fields
  });

  res.json(contract);
});

// Get All Contracts
router.get("/", async (req,res)=>{
  const data = await Contract.find().populate("blueprintId","name");
  res.json(data);
});

// Get Single Contract
router.get("/:id", async (req,res)=>{
  const data = await Contract.findById(req.params.id);
  res.json(data);
});

// Change Contract Status
router.patch("/:id/status", async (req,res)=>{
  const contract = await Contract.findById(req.params.id);
  const nextStatus = req.body.status;

  if(!validTransition(contract.status, nextStatus)){
    return res.status(400).json({error:"Invalid lifecycle transition"});
  }

  contract.status = nextStatus;
  await contract.save();

  res.json(contract);
});

module.exports = router;

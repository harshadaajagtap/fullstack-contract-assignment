const express = require("express");
const router = express.Router();
const Blueprint = require("../models/Blueprint");

// Create Blueprint
router.post("/", async (req,res)=>{
  const blueprint = await Blueprint.create(req.body);
  res.json(blueprint);
});

// Get All Blueprints
router.get("/", async (req,res)=>{
  const data = await Blueprint.find();
  res.json(data);
});

// Get Single Blueprint
router.get("/:id", async (req,res)=>{
  const data = await Blueprint.findById(req.params.id);
  res.json(data);
});

module.exports = router;

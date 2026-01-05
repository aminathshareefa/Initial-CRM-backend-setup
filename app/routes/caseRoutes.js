const express = require("express");
const router = express.Router();
const { createCase, updateCase } = require("../controllers/caseController");

router.post("/", createCase);
router.patch("/:id", updateCase);

module.exports = router;

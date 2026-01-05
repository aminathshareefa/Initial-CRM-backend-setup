const express = require("express");
const router = express.Router();

const {
  addCustomer,
  getCustomers,
} = require("../controllers/customerController");

router.post("/add", addCustomer);
router.get("/", getCustomers);

module.exports = router;

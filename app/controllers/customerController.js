// app/controllers/customerController.js

exports.addCustomer = (req, res) => {
  res.json({ message: "Customer added successfully" });
};

exports.getCustomers = (req, res) => {
  res.json({ message: "All customers fetched" });
};

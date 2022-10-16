const router = require("express").Router();
const Customer = require("../models/Customer");

//add new customer

router.post("/", async (req, res) => {
  const newCustomer = new Customer(req.body);

  try {
    const savedCustomer = await newCustomer.save();
    res.status(200).json(savedCustomer);
    console.log("post: Customer/ call success");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all customers

router.get("/", async (req, res) => {
    try {
        const customers = await Customer.find();
      res.status(200).json(customers);
      console.log("get: Customer/ call success");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
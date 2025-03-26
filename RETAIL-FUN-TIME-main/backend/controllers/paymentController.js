const Payment = require("../models/Payment");

// Get all payments
exports.getPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching payments" });
    }
};

// Create a payment
exports.createPayment = async (req, res) => {
    try {
        const { amount, method, status } = req.body;
        const newPayment = new Payment({ amount, method, status });
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(400).json({ message: "Error processing payment" });
    }
};

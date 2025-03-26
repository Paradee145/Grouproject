const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    method: { type: String, required: true, enum: ["credit_card", "paypal", "cash"] },
    status: { type: String, required: true, enum: ["pending", "completed", "failed"] },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Payment", PaymentSchema);

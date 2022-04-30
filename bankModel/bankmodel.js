const mongoose = require("mongoose");

const bankSchema = {
    name: String,
    AccountNumber: String,
    BankName: String,
    IFSCcode: String
}

const BankPayment = mongoose.model("BankPayment", bankSchema);

module.exports = BankPayment;
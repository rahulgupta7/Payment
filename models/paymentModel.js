const mongoose = require("mongoose");

const paymentSchema = {
    name : String,
    cardNumber : String,
    month : String,
    year : String,
    cvc : String
}

// const bankSchema = {
//     name: String,
//     AccountNumber: String,
//     BankName: String,
//     IFSCcode: String
// }

const CardPayment = mongoose.model("CardPayment", paymentSchema);
// const BankPayment = mongoose.model("BankPayment", bankSchema);

module.exports = CardPayment;
const express = require("express");
const router = express.Router();
const CardPayment = require("../models/paymentModel");
// const BankPayment = require("../models/paymentModel");

router.route("/").post((req, res) => {
    const name =req.body.name;
    const cardNumber =req.body.cardNumber;
    const month =req.body.month;
    const year =req.body.year;
    const cvc =req.body.cvc;
    const newPayment = new CardPayment({
        name,
        cardNumber,
        month,
        year,
        cvc
    });

    newPayment.save();
})

// router.route("/BankTransfer").post((req, res) => {
//     const name =req.body.name;
//     const AccountNumber =req.body.AccountNumber;
//     const BankName =req.body.BankName;
//     const IFSCcode =req.body.IFSCcode;
//     const bankPayment = new BankPayment({
//         name,
//         AccountNumber,
//         BankName,
//         IFSCcode
//     });

//     bankPayment.save();
// })

module.exports = router;
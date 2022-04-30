const express = require("express");
const router = express.Router();
const BankPayment = require("../bankModel/bankmodel");

router.route("/BankTransfer").post((req, res) => {
    const name =req.body.name;
    const AccountNumber =req.body.AccountNumber;
    const BankName =req.body.BankName;
    const IFSCcode =req.body.IFSCcode;
    const bankPayment = new BankPayment({
        name,
        AccountNumber,
        BankName,
        IFSCcode
    });

    bankPayment.save();
})

module.exports = router;
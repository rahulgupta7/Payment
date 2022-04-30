const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://admin:admin@payments.nrh8z.mongodb.net/payments');

app.use("/", require("./routes/paymentRoute"));
app.use("/BankTransfer", require("./bankRoute/bankroute"));






app.listen(8080, function() {
    console.log("express server is running on port 8080")
})


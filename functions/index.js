const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const {response} = require("express");
const stripe = require("stripe")("sk_test_51NDDeGCTBPVFaxN9WvYI1xEVlgBKM8NiwEFketIvihLIFwjZYuTPqJZ1kVq99waJ6bnPAcz2FWFodkoVUZvOoEfG00slt24exQ");


// Api


// - App config
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - Api routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post(
    "/payments/create",
    async (request, response) => {
      const total = request.query.total;
      console.log("payments request received ", total);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
        automatic_payment_methods: {enabled: true},
      });
      response.status(200).send({clientSecret: paymentIntent.client_secret});
    });



exports.api = functions.https.onRequest(app);



const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51NDDeGCTBPVFaxN9WvYI1xEVlgBKM8NiwEFketIvihLIFwjZ" +
    "YuTPqJZ1kVq99waJ6bnPAcz2FWFodkoVUZvOoEfG00slt24exQ");


// Api


// - App config
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - Api routes
app.get("/", (request, response) => response.status(200).send("hello world"));


// - Listen command

exports.api = functions.https.onRequest(app);

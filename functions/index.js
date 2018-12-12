const path = require("path");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// CORS Express middleware to enable CORS Requests.
const cors = require("cors")({
  origin: true
});
let nodemailer = require("nodemailer");
let aws = require("aws-sdk");

admin.initializeApp();
// configure AWS SDK
aws.config.loadFromPath("./config.json");

// create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
  SES: new aws.SES({
    apiVersion: "2010-12-01"
  })
});

function sendEmail() {
  // send some mail
  transporter.sendMail(
    {
      from: "charlener83@gmail.com",
      to: "charlener83@hotmail.com",
      subject: "Message",
      text: "I hope this message gets sent!"
    },
    (err, info) => {
      if (err) {
        throw err;
      }

      console.log(info.envelope);
      console.log(info.messageId);
    }
  );
}

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.handleContactForm = functions.https.onRequest((request, response) => {
  // [START usingMiddleware]
  // Enable CORS using the `cors` express middleware.
  return cors(request, response, () => {
    // [END usingMiddleware]
    response.send("Hello from Firebase!");
    sendEmail();
  });
});

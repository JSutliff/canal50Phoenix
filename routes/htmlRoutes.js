const path = require("path");
require("dotenv").config();
var router = require("express").Router();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/email", (req, res) => {
  // console.log("data: ", req.body);

  res.json({ message: "Message received!!" });
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/espanol", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/espanol.html"));
});

router.get("/phoenix-local-television-advertising", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/advertise.html"));
});

router.post("/phoenix-tv-ads", (req, res) => {
  const msg = {
    to: "dave@davidprimm.com",
    from: req.body.userEmailInput,
    subject: "[!URGENT] Email From Canal 50 Website",
    text: `${req.body.userMessageInput}
    
    from: ${req.body.userNameInput}`,
  };
  try {
    sgMail.send(msg);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
  res.redirect("/");
});

module.exports = router;

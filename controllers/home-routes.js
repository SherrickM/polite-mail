const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("landing");
});

router.get("/generate", (req, res) => {
  res.render("generate");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;

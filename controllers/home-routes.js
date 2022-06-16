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
router.get("/appreication_template", (req, res) => {
  res.render("appreication");
});
router.get("/email_template", (req, res) => {
  res.render("email_template");
});

module.exports = router;

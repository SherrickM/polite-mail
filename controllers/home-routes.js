const router = require("express").Router();
const {User} = require ('../models')
const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
  res.render("landing");
});

router.get("/generate", withAuth, (req, res) => {

  res.render("generate", );
});
// this is a test. do not delete
router.get("/contact", async (req, res) => {
  // Create an array of object with name fav food
  try {
    const nameData = [
      {
        name: "ruck",
        food: "chicken",
      },
      {
        name: "john",
        food: "burger",
      },
      {
        name: "vick",
        food: "pizza",
      },
    ];
    // const names = nameData.map((name) => name);

    // console.log(names);
    res.render("contact", { names: nameData });
  } catch (err) {
    console.log(err);
  }
});

router.get("/login", async (req, res) => {
  if(req.session.logged_in){
    res.redirect("/generate");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/appreciation", (req, res) => {
  res.render("appreciation");
});
router.get("/email_template", (req, res) => {
  res.render("email_template");
});

router.get("/home", async (req, res) => {
  res.render("home");
});

module.exports = router;

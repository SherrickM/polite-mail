const router = require("express").Router();
const {User} = require ('../models')
const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
  res.render("landing");
});

router.get("/generate", (req, res) => {
  res.render("generate");
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

router.get("/home", withAuth, async (req, res) => {
  const userData = await User.findByPk(req.seesion.user-id);
  const user = userData.get({plain: true});

  res.render("home",{
    user : {
      name: user.name,
      email: user.email
    }
  });
});

module.exports = router;

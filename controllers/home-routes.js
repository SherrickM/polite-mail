const router = require("express").Router();
const session = require("express-session");
const {User} = require ('../models')
const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
  res.render("landing");
});

router.get("/generate", withAuth, async (req, res) => {
  console.log({session: req.session})
  const userData = await User.findByPk(req.session.user_id);

  // serialize (unpack)
  const user = userData.get({ plain: true });
  console.log(user)
  res.render('generate', {
        user: {
          name: user.username,
        
        },
         logged_in: true
    });
 
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
router.get("/appreciation_template", (req, res) => {
  res.render("appreciation");
});
router.get("/email_template", (req, res) => {
  res.render("email_template");
});

router.get("/home", async (req, res) => {
  res.render("home");
});

module.exports = router;

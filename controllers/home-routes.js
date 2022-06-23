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
router.get("/appreciation", withAuth, async (req, res) => {
  console.log({session: req.session})
  const userData = await User.findByPk(req.session.user_id);

  // serialize (unpack)
  const user = userData.get({ plain: true });
  console.log(user)
  res.render('appreciation', {
        user: {
          name: user.username,
        
        },
         logged_in: true
    });
 
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

const router = require("express").Router();

const {User, Template} = require ('../models')
const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
  if(req.session.logged_in){
    res.redirect("/selection");
    return;
  }

  res.render("landing");
 
});

router.get("/generate", withAuth, async (req, res) => {
  // console.log({session: req.session})
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
  // console.log({session: req.session})
  const userData = await User.findByPk(req.session.user_id);

  // serialize (unpack)
  const user = userData.get({ plain: true });
  // console.log(user)
  res.render('appreciation', {
        user: {
          name: user.username,
        
        },
         logged_in: true
    });
 
});

router.get("/selection", withAuth, async (req, res) => {
  // console.log({session: req.session})
  const userData = await User.findByPk(req.session.user_id);

  // serialize (unpack)
  const user = userData.get({ plain: true });
  console.log(user)
  res.render('selection', {
        user: {
          name: user.username,
        
        },
         logged_in: true
    });
 
});


router.get('/', async (req, res) => {
  try {
    // Get all templates and JOIN with user data
    const templateData = await Template.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const templates = templateData.map((template) => template.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('generate', { 
      templates, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/template/:id',withAuth, async (req, res) => {
  try {
    const templateData = await Template.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        },
      ],
    });

    const template = templateData.get({ plain: true });
console.log(template);
    res.render('history', {
      
      template: {
        id : template.id,
        recipient : template.recipient_name,
        subject : template.message,
        username : template.user.username

      },
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/history',withAuth, async (req, res) => {
  try {
    const templateData = await Template.findByPk(req.session.user_id, {
      include: [
        {
          model: User,
          attributes: ['username']
        },
      ],
    });

    const template = templateData.get({ plain: true });
console.log(template);
    res.render('history', {
      user: {
        name: template.user.username,
      
      },
      template: {
        id : template.id,
        recipient : template.recipient_name,
        subject : template.message,
        username : template.user.username

      },
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if(req.session.logged_in){
    res.redirect("/selection");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/email_template", (req, res) => {
  res.render("email_template");
});

router.get("/home", async (req, res) => {
  res.render("home");
});



module.exports = router;

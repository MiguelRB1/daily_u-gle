const router = require('express').Router();

const { Journal, User } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const itemData = await Journal.findAll({
      include: [User],
    });

    const journals = itemData.map((journal) => journal.get({ plain: true }));

    res.render('homepage', { journals, logged_in:req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req,res)=>{
  if(req.session.logged_in){
    res.redirect("/homepage") // change this route to userdashboard or profile 
    return
  }res.render("login")
})
router.get('/register', (req,res)=>{
  if(req.session.logged_in){
    res.redirect("/homepage") // change this route to userdashboard or profile 
    return
  }res.render("register")
})

// })
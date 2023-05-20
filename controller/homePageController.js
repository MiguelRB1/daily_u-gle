const router = require('express').Router();
const { Journal } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const itemData = await Journal.findAll({
      include: [User],
    });

    const journal = itemData.map((post) => post.get({ plain: true }));

    res.render('homePage', { Journal });
  } catch (err) {
    res.status(500).json(err);
  }
});

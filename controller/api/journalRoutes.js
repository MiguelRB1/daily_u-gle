const router = require('express').Router();
const {Journal} = require('../../models');

router.post('/', async (req, res) => {
  try {
    // let journal= req.body;
    // journal.date_created=new Date(journal.date_created)
    console.log(req.session.user)
    const newJournal = await Journal.create({
      ...req.body,
      user_id: req.session.user.id,
    });

    res.status(200).json(newJournal);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const journalData = await Journal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user.id,
      },
    });

    if (!journalData) {
      res.status(404).json({ message: 'No journal found with this id!' });
      return;
    }

    res.status(200).json(journalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const journalData = await Journal.findAll({
      where: {
        user_id: req.session.user.id,
      },
    });

    if (!journalData) {
      res.status(404).json({ message: 'No journal found with this id!' });
      return;
    }

    res.status(200).json(journalData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

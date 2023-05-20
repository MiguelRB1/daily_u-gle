const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const journalRoutes = require('./journalRoutes');

// router.use('/users', userRoutes);
router.use('/journals', journalRoutes);

module.exports = router;

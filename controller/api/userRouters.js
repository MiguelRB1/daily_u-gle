const router = require('express').Router();
const {User} = require('../../models');

 router.post('/login',async function (req, res) {
      // login logic to validate req.body.user and req.body.pass
      // would be implemented here. for this example any combo works
      console.log(req.body.user)
      const hashPassword = await bcrypt.hash(req.body.pass, 10);
      const user = await User.findOne({ where: { email: req.body.user } });
    if (user === null) {
      console.log('Not found!');
    } else {
      console.log(user instanceof User); // true
      const isPasswordCorrect=await user.checkPassword(req.body.pass)
      if(user instanceof User && isPasswordCorrect ){
        // regenerate the session, which is good practice to help
        // guard against forms of session fixation
        req.session.regenerate(function (err) {
          if (err) next(err)
      
          // store user information in session, typically a user id
          req.session.user = req.body.user
      
          // save the session before redirection to ensure page
          // load does not happen before session is saved
          
          
          req.session.save(function (err) {
            if (err) return next(err)
            res.redirect('/')
          })
        })
      } else{
        res.send("invalid login info")
      }
     
    }
    })
    router.post('/logout', (req, res) => {
        if (req.session.logged_in) {
          req.session.destroy(() => {
            res.status(204).end();
          });
        } else {
          res.status(404).end();
        }
      });
      router.post('/', async (req, res) => {
        try {
          const userData = await User.create(req.body);
      
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
      
            res.status(200).json(userData);
          });
        } catch (err) {
          res.status(400).json(err);
        }
      });
    module.exports = router;
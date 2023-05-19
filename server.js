const express = require('express')
const app = express()
const port = 3001
const path = require('path')
const session = require('express-session')
const User = require('./user')
const sequelize = require("./database/connection")
const bcrypt = require("bcrypt")
app.use(express.json())
// app.use(express.static('public'))
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// middleware to test if authenticated
function isAuthenticated (req, res, next) {
  if (req.session.user) next()
  else next('route')
}
app.get('/', isAuthenticated, function (req, res) {
  // this is only called when there is an authentication user due to isAuthenticated
   res.sendFile(path.join(__dirname,'./public/index.html'))
})

app.get('/', function (req, res) {
  res.send('<form action="/login" method="post">' +
    'Username: <input name="user"><br>' +
    'Password: <input name="pass" type="password"><br>' +
    '<input type="submit" text="Login"></form>')
})
app.post('/login', express.urlencoded({ extended: false }),async function (req, res) {
  // login logic to validate req.body.user and req.body.pass
  // would be implemented here. for this example any combo works
  console.log(req.body.user)
  const hashPassword = await bcrypt.hash(req.body.pass, 10);
  const user = await User.findOne({ where: { email: req.body.user, password: hashPassword } });
if (user === null) {
  console.log('Not found!');
} else {
  console.log(user instanceof User); // true
  if(user instanceof User){
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

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'./public/index.html'))
// })
app.get('/notes',(req,res)=>{
  res.sendFile(path.join(__dirname,'./public/notes.html'))
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
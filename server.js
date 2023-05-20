const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002;
const path = require('path')
const session = require('express-session')
const User = require('./user')
const routes = require('./controller');
const sequelize = require("./database/connection")
const bcrypt = require("bcrypt")
const listEndpoints = require('express-list-endpoints');
const exphbs = require('express-handlebars');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const helpers = require('./utils/helpers');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
 app.use(express.static('public'))
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
// const hbs = exphbs.create({ helpers });
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);
// middleware to test if authenticated
// function isAuthenticated (req, res, next) {
//   if (req.session.user) next()
//   else next('route')
// }
// app.get('/', isAuthenticated, function (req, res) {
//   // this is only called when there is an authentication user due to isAuthenticated
//    res.sendFile(path.join(__dirname,'./public/index.html'))
// })

// app.get('/', function (req, res) {
//   // res.send('<form action="/login" method="post">' +
//   //   'Username: <input name="user"><br>' +
//   //   'Password: <input name="pass" type="password"><br>' +
//   //   '<input type="submit" text="Login"></form>')
//   res.sendFile(path.join(__dirname,'./public/login.html'))
// })



// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'./public/index.html'))
// })
// app.get('/notes',(req,res)=>{
//   res.sendFile(path.join(__dirname,'./public/notes.html'))
//   })
  app.use(require('./controller'));

  console.log(listEndpoints(app));
  
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
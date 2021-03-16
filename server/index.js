require('dotenv').config();



const express = require('express');
const massive = require('massive');
const session = require('express-session')

const app = express()

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env
const auth = require('./controllers/userController')
const talker = require('./controllers/talkerController');


app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db =>{
  app.set('db', db)
  console.log('db is working babeee!');
})


app.post(`/auth/register`, auth.register);
app.post(`/auth/login`, auth.login)
app.post(`/auth/logout`, auth.logout);
app.get(`/auth/user`, auth.getUserSession);


app.get('/api/talkers', talker.getTalkers);
app.post('/api/talkers', talker.addTalker);

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))
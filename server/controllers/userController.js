const bcrypt = require('bcrypt')

module.exports = {
 register: async (req, res) => {
  const db = req.app.get('db');
  const { email, password, username } = req.body;
  const isUser = await db.check_user(email)
  if(isUser[0]){
    return res.status(400).send('email exists')
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const [newUser] = await db.add_user([email, username, hash]);
  req.session.user = {
    userId: newUser.user_id,
    email: newUser.email,
    username: newUser.username
  }
  res.status(200).send(req.session.user)
 } ,
 login: async(req, res)=> {
   const db = req.app.get('db');
   const { email , password} = req.body;
   const [isUser] = await db.check_user(email)
   if(!isUser){
     res.status(401).send("wrong login info")
   }
   const authenticated = bcrypt.compareSync(password, isUser.password);
   if (authenticated){
     req.session.user= {
       userId: isUser.user_id,
       email: isUser.email,
       username: isUser.username
     }
     res.status(200).send(req.session.user)
   } else{
     res.status(401).send("wrong login")
   }
 },
 logout: (req, res) => {
   req.session.destroy();
   res.status(200).send('Logout complete');
 },
 getUserSession: (req, res)=> {
   if(req.session.user){
     res.status(200).send(req.session.user);
   } else {
     res.status(404).send("Login")
   }
 }
}
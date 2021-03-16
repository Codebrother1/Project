const bcrypt = require('bcrypt');




module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db');
    const { email, password } = req.body;
    console.log("body: ", req.body);
    const authUser = await db.check_user(email)
    if(authUser[0]){
      return res.status(400).send("Please Login");
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt);
    const [newUser] = await db.add_user([email, username, hash])
    req.session.user = {
      userId: newUser.user_id,
      email: newUser.email,
      username: newUser.username
    }
    res.status(200).send(req.session.user)
  }
}
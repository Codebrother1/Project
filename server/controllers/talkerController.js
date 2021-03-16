module.exports = {
  getTalkers: async (req, res) => {
      const db = req.app.get('db');
      const talkers = await db.get_talkers();
      res.status(200).send(talkers);
  },
  addTalker: async (req, res) => {
      const db = req.app.get('db');
      const {imageUrl, title} = req.body;
      const {userId} = req.session.user;
      if(!req.session.user){
          return res.status(401).send("Please login")
      }
      const talkers = await db.add_talker([imageUrl, title, userId]);
      res.status(200).send(talkers)
  }
}
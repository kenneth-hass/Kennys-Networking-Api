const { User } = require("../models");

module.exports = {

  async addUsersFriend(req, res) {
    try {

      const userData = await User.findByIdAndUpdate(

        { _id: req.params.userId },
        {
          $push: { friends: [req.params.friendId] },
        },
        {
          new: true,
        }
      );

      res.status(200).json(userData);
    } catch (err) {

      res.status(500).json(err);
    }
  },

  async deleteUsersFriend(req, res) {
    try {

      const userData = await User.findOneAndUpdate(

        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      res.status(200).json(userData);
    } catch (err) {
      
      res.status(500).json(err);
    }
  },
};
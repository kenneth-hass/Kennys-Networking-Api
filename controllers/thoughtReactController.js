const { Thought } = require("../models");

module.exports = {

  async addThoughtReaction(req, res) {
    try {

      const thoughtData = await Thought.findByIdAndUpdate(

        { _id: req.params.thoughtId },
        {
          $push: {
            reactions: [
              {
                reactionBody: req.body.reactionBody,
                username: req.body.username,
              },
            ],
          },
        },
        {
          new: true,
        }
      );

      res.status(200).json(thoughtData);
    } catch (err) {

      res.status(500).json(err);
    }
  },
  async deleteThoughtReaction(req, res) {
    try {

      const thoughtData = await Thought.findByIdAndUpdate(

        { _id: req.params.thoughtId },
        {
          $pull: { reactions: { reactionId: req.body.reactionId } },
        },
        {
          new: true,
        }
      );

      res.status(200).json(thoughtData);
    } catch (err) {
      
      res.status(500).json(err);
    }
  },
};
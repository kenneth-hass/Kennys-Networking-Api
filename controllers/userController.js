const { User } = require("../models");

module.exports = {

  async createUser(req, res) {
    try {

      const userData = await User.create(req.body);

      res.status(200).json(userData);
    } catch (err) {

      res.status(500).json(err);
    }
  },

  async getUser(req, res) {
    try {

      const userData = await User.find();

      res.status(200).json(userData);
    } catch (err) {

      res.status(500).json(err);
    }
  },

  async getSingleUser(req, res) {
    try {

      const userData = await User.findOne({ _id: req.params.userId })

        .populate("friends")

        .populate("thoughts");

      res.status(200).json(userData);
    } catch (err) {

      res.status(500).json(err);
    }
  },
 
    };
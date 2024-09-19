const router = require("express").Router();

const {

  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,

} = require("../../controllers/userController.js");

const {

  addUsersFriend,
  deleteUsersFriend,

} = require("../../controllers/userFriendController.js");

router.route("/").get(getUser).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addUsersFriend).delete(deleteUsersFriend);

module.exports = router;
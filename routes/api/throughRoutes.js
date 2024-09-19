const router = require("express").Router();

const {

  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtController");

const {

  addThoughtReaction,

  deleteThoughtReaction,

} = require("../../controllers/thoughtReactionControllers");

router.route("/").get(getThought).post(createThought);
router
  .route("/:thoughtId")

  .get(getSingleThought)

  .delete(deleteThought)

  .put(updateThought);

module.exports = router;
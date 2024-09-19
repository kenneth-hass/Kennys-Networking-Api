const { Schema, model, default: mongoose } = require("mongoose");

const { Thought } = require("./Thought");

const userSchema = new Schema(
  {
    username: { type: String, require: true, unique: true }, //?
    email: { type: String, require: true, unique: true },
    thoughts: [{ type: Schema.Types.ObjectId, ref: "thought" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "user" }],
  },

  {
    id: true,
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual("friendCount").get(function () {

  if (this.friends.length !== 0) {
    
    return `You have ${this.friends.length} friends`;
  }
  return "you have no friends";
});

const User = model("user", userSchema);

module.exports = User;
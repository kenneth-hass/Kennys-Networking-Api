const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {

    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: { type: String, require: true, minLength: 1, maxLength: 280 },
    username: { type: String, require: true },
    createdAt: { type: Date, default: Date.now, get: formateDate },
  },

  {
    id: false,
    toJSON: {
      getters: true,
    },
  }
);

function formateDate(createdAt) {

  return new Date(createdAt).toLocaleDateString("en-us", {
    
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

module.exports = { reactionSchema };
const { Schema, model, set } = require("mongoose");

const { reactionSchema } = require("./Reaction");

const thoughtSchema = new Schema(

  {
    thoughtText: { type: String, require: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now, get: formateDate },
    username: { type: String, require: true },
    reactions: [reactionSchema],
  },

  {
    id: true,
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {

  if (this.reactions.length !== 0) {

    return `You have ${this.reactions.length} reactions`;
  }
  return "you have no reactions";
});

function formateDate(createdAt) {

  return new Date(createdAt).toLocaleDateString("en-us", {
    
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
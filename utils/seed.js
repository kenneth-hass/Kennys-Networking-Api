const connection = require("../config/connection");

const { User, Thought, Reaction } = require("../models");

const { getMaxListeners } = require("../models/Thought");

connection.on("error", (err) => err);

connection.once("open", async () => {

  console.log("connected");

  // Dropping tables if exist

  let thoughtCheck = await connection.db

    .listCollections({ name: "thoughts" })
    .toArray();

  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }

  let userCheck = await connection.db

    .listCollections({ name: "users" })
    .toArray();

  if (userCheck.length) {

    await connection.dropCollection("users");

    console.log("collection dropped");
  }

  const thoughtData = await Thought.create({\

    thoughtText: "thought text here",
    reactions: [

      { reactionBody: "ahhhhhhh", username: "kenny" },
      { reactionBody: "wooooooo", username: "kenny" },
    ],
  });

  const userData = await User.create(
    {

      username: "kenneth-hass",
      email: "kennethhass1014@gmail.com",
      thoughts: [],
      friends: []
    },

    {
      username: "kenny",
      email: "booo98@gmail.com",
      thoughts: [],
      friends: []
    }
  );

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
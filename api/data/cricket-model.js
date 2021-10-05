const mongoose = require('mongoose');

const winningStatusSchema = new mongoose.Schema({
  winningYear: [Number],
  matchType: String,
});
const gameSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
    unique: true,
  },
  worldCup: String,
  captain: String,
  matchWon: winningStatusSchema,
});

//this is add gameSchema to mongoose, we can access this scema anywhere using mangoose.model("Game")
mongoose.model('Team', gameSchema, 'teams');

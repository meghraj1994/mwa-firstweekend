const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
    unique: true,
  },
  worldCup: String,
  captain: String,
});

//this is add gameSchema to mongoose, we can access this scema anywhere using mangoose.model("Game")
mongoose.model('Team', gameSchema, 'teams');

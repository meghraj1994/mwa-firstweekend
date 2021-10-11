const { query, request } = require('express');
const mongoose = require('mongoose');
const Teams = mongoose.model('Team');

//geting all teams team
const allTeams = function (req, res) {
  var offset = 0;
  var count = 15;
  var maxCount = 20;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({ message: 'Query string offset and count should be numbers' });
    return;
  }
  if (count > maxCount) {
    res.status(500).json({ message: 'cannot exceed maxCount of' + maxCount });
    return;
  }
  Teams.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, teams) {
      if (err) {
        console.log('error finding teams');
        res.status(500).json(err);
      } else {
        console.log('Query game found', teams.length);
        res.status(200).json(teams);
      }
    });
};

// getting one team
const oneTeam = function (req, res) {
  // console.log('one game controller');
  var teamId = req.params.teamId;
  if (mongoose.isValidObjectId(req.params.teamId)) {
    Teams.findById(teamId).exec(function (err, team) {
      if (err) {
        res.status(500).json({ message: 'error in finding teams', err });
      } else if (!team) {
        res
          .status(404)
          .json({ message: 'entered teamId not found in database' });
      } else {
        console.log('one team Found');
        res.status(200).json(team);
      }
    });
  } else {
    console.log('Please Enter valid teamId', teamId);
    res.status(400).json({ message: 'entered teamId is not valid' + teamId });
    return;
  }
};

//adding game
const addTeam = function (req, res) {
  console.log('add one team');
  Teams.create(
    {
      teamName: req.body.teamName,
      worldCup: req.body.worldCup,
      captain: req.body.captain,
    },
    function (err, team) {
      if (err) {
        console.log('Error creating team');
        res.status(400).json(err);
      } else {
        console.log('new team added', team);
        res.status(201).json(team);
      }
    }
  );
};

//update team
const updateTeam = function (req, res) {
  var teamId = req.params.teamId;
  if (mongoose.isValidObjectId(req.params.teamId)) {
    Teams.findById(teamId).exec(function (err, team) {
      if (err) {
        res.send(500).json({ message: 'error in fetching team' });
      } else if (!team) {
        res.status(400).json({ message: 'entered teamId is not found' });
      } else {
        (team.teamName = req.body.teamName),
          (team.worldCup = req.body.worldCup),
          (team.captain = req.body.captain);
        team.save(function (err, updateTeam) {
          if (err) {
            res.status(500).json({ message: ' server error', err });
          } else {
            res.status(201).json({ message: 'team updated', team });
          }
        });
      }
    });
  } else {
    res.status(400).json({
      message: 'entered teamId is not valid,please enter valid teamId',
    });
    return;
  }
};

//deleting game
const deleteTeam = function (req, res) {
  var teamId = req.params.teamId;
  console.log(teamId);
  if (mongoose.isValidObjectId(req.params.teamId)) {
    Teams.findByIdAndRemove(teamId).exec(function (err, team) {
      if (err) {
        res.status(500).json({ message: 'error in fetching team' });
        return;
      } else if (!team) {
        res.status(400).json({ message: 'eneterd teamId not found', teamId });
      } else {
        res.status(201).json({ message: 'game deleted' });
      }
    });
  } else {
    res.status(400).json({ message: 'entered teamId is invalid', teamId });
    return;
  }
};

module.exports = {
  allTeams: allTeams,
  oneTeam: oneTeam,
  addTeam: addTeam,
  updateTeam: updateTeam,
  deleteTeam: deleteTeam,
};

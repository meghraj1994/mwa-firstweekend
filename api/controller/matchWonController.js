const { query, request } = require('express');
const mongoose = require('mongoose');
const Teams = mongoose.model('Team');

//geting all wiining year
const getAllWiningYear = function (req, res) {
  var teamId = req.params.teamId;
  if (mongoose.isValidObjectId(req.params.teamId)) {
    console.log('validated');
    Teams.findById(teamId).exec(function (err, team) {
      if (err) {
        res.status(500).json({ message: 'error in finding teams' });
      } else if (!team) {
        res
          .status(404)
          .json({ message: 'entered teamId not found in database' });
        return;
      } else {
        Teams.findById(teamId)
          .select('winningYear')
          .exec(function (err, result) {
            if (err) {
              res.status(500).json({ message: 'error finding winningYear' });
              return;
            } else {
              console.log(result._doc.winningYear);
              res.status(200).json(result._doc.winningYear);
              return;
            }
          });
      }
    });
  } else {
    console.log('Please Enter valid teamId', teamId);
    res.status(400).json({ message: 'entered teamId is not valid' + teamId });
    return;
  }
};

//adding winningYear
const addwinningYear = function (req, res) {
  var teamId = req.params.teamId;
  if (mongoose.isValidObjectId(req.params.teamId)) {
    console.log('validated');
    Teams.findById(teamId).exec(function (err, team) {
      if (err) {
        res.status(500).json({ message: 'error in finding teams' });
      } else if (!team) {
        res
          .status(404)
          .json({ message: 'entered teamId not found in database' });
        return;
      } else {
        Teams.findById(teamId).exec(function (err, updatedTeam) {
          if (err) {
            res.status(500).json({ message: 'error finding winningYear' });
            return;
          } else {
            console.log(updatedTeam._doc.winningYear);
            updatedTeam._doc.winningYear.push(req.body.winningYear);
            updatedTeam.save(function (err, result) {
              if (err) {
                res.status(500).json({ message: 'server erro' });
              } else {
                res.status(200).json(result);
                return;
              }
            });
          }
        });
      }
    });
  } else {
    console.log('Please Enter valid teamId', teamId);
    res.status(400).json({ message: 'entered teamId is not valid' + teamId });
    return;
  }
};

//update winningYear
const updateWinningYear = function (req, res) {
  var teamId = req.params.teamId;
  if (mongoose.isValidObjectId(req.params.teamId)) {
    Teams.findById(teamId).exec(function (err, team) {
      if (err) {
        res.send(500).json({ message: 'error in fetching team' });
      } else if (!team) {
        res.status(400).json({ message: 'entered teamId is not found' });
      } else {
        (team.winningYear = req.body.winningYear),
          (team.type = req.body.type),
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

// //deleting winingYear
const deleteWinningYear = function (req, res) {
  var teamId = req.params.teamId;
  if (mongoose.isValidObjectId(req.params.teamId)) {
    console.log('validated');
    Teams.findById(teamId).exec(function (err, team) {
      if (err) {
        res.status(500).json({ message: 'error in finding teams' });
      } else if (!team) {
        res
          .status(404)
          .json({ message: 'entered teamId not found in database' });
        return;
      } else {
        Teams.findById(teamId).exec(function (err, updatedTeam) {
          if (err) {
            res.status(500).json({ message: 'error finding winningYear' });
            return;
          } else {
            updatedTeam
              .findByIdAndRemove(updatedTeam._doc.winningYear)
              .exec(function (err, result) {
                if (err) {
                  res
                    .status(500)
                    .json({ message: 'error in finding winningYear' });
                } else {
                  res.status(201).json(result);
                }
              });
          }
        });
      }
    });
  } else {
    console.log('Please Enter valid teamId', teamId);
    res.status(400).json({ message: 'entered teamId is not valid' + teamId });
    return;
  }
};

module.exports = {
  getAllWiningYear: getAllWiningYear,
  addwinningYear: addwinningYear,
  deleteWinningYear: deleteWinningYear,
  updateWinningYear: updateWinningYear,
};

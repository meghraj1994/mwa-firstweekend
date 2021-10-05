const express = require('express');
const router = express.Router();
const cricketController = require('../controller/cricketController');
const winningYearController = require('../controller/matchWonController');

router
  .route('/teams')
  .get(cricketController.allTeams)
  .post(cricketController.addTeam);
router
  .route('/teams/:teamId')
  .get(cricketController.oneTeam)
  .put(cricketController.updateTeam)
  .delete(cricketController.deleteTeam);
router
  .route('/teams/:teamId/winningYear')
  .get(winningYearController.getAllWiningYear)
  .post(winningYearController.addwinningYear);

router
  .route('/teams/:teamId/winningYear/:winningYearId')
  .delete(winningYearController.deleteWinningYear)
  .put(winningYearController.updateWinningYear);

module.exports = router;

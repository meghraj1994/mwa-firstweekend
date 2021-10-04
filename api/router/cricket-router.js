const express = require('express');
const router = express.Router();
const cricketController = require('../controller/cricketController');

router
  .route('/teams')
  .get(cricketController.allTeams)
  .post(cricketController.addTeam);
router
  .route('/teams/:teamId')
  .get(cricketController.oneTeam)
  .put(cricketController.updateTeam)
  .delete(cricketController.deleteTeam);

module.exports = router;

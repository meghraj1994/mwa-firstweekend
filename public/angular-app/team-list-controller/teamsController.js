angular.module('teams').controller('TeamsController', TeamsController);

function TeamsController(TeamFactory) {
  const vm = this;
  vm.title = 'Welcome to Cricket Teams';

  getAllTeams();

  function getAllTeams() {
    // console.log('get all teams');
    TeamFactory.allTeams().then(function (response) {
      vm.teams = response;
      console.log(vm.jobs);
      // for (job of vm.jobs) {
      //   job.postDate = Date(job.postDate);
      // }
    });
  }

  //adding new Game
  vm.addTeam = function () {
    console.log('add team controller');
    const newPost = {
      team: vm.newTeamName,
      captain: vm.newCaptain,
    };
    if (vm.teamsForm.$valid) {
      TeamFactory.addOne(newPost)
        .then(function (response) {
          console.log('Team is saved', response);
        })
        .catch(function (error) {
          console.log(errr);
        });
    } else {
      vm.isSubmitted = true;
    }
    getAllTeams();
  };

  vm.delete = function (id) {
    console.log('delete method called');
    TeamFactory.deleteOne(id)
      .then(function (response) {
        console.log('team is deleted');
      })
      .catch(function () {
        console.log(err);
      });
    getAllTeams();
  };
}

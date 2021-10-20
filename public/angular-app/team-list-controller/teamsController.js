angular.module('teams').controller('TeamsController', TeamsController);

function TeamsController(TeamFactory) {
  const vm = this;
  vm.id=0;
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
      teamName: vm.newTeamName,
      captain: vm.newCaptain,
      worldCup: vm.newWorldCup,
    };
      //checking if there is Id it will update team and if no if then add newOne team
    if(vm.id){
      TeamFactory.updateTeam(vm.id,newPost).then(function (response) {
        console.log('Team is updated', response);
        vm.id=null,
        vm.newTeamName="",
        vm.newCaptain=""
      })
      .catch(function (error) {
        console.log(error);
      })
      getAllTeams();
    } else
    if (vm.addForm.$valid) {
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

  vm.editTeam = function(team) {
    vm.newTeamName = team.teamName;
    vm.newCaptain = team.captain;
    vm.id=team._id
  }
}

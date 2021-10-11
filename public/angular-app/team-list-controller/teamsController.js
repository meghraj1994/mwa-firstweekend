angular.module('teams').controller('TeamsController', TeamsController);

function TeamsController(TeamFactory) {
  const vm = this;
  vm.title = 'Welcome to Cricket Teams';

  getAllTeams();

  function getAllTeams() {
    JobFactory.allTeams().then(function (response) {
      vm.jobs = response;
      // for (job of vm.jobs) {
      //   job.postDate = Date(job.postDate);
      // }
    });
  }

  //adding new Game
  // vm.addTeam = function () {
  //   console.log('add team controller');
  //   const newPost = {
  //     title: vm.newTitle,
  //     salary: vm.newSalary,
  //   };
  //   if (vm.jobsForm.$valid) {
  //     JobFactory.addOne(newPost)
  //       .then(function (response) {
  //         console.log('Job is saved', response);
  //       })
  //       .catch(function (error) {
  //         console.log(errr);
  //       });
  //   } else {
  //     vm.isSubmitted = true;
  //   }
  //   getAllTeams();
  // };

  // vm.delete = function (id) {
  //   console.log('delete method called');
  //   JobFactory.deleteJob(id)
  //     .then(function (response) {
  //       console.log('game is deleted');
  //     })
  //     .catch(function () {
  //       console.log(err);
  //     });
  //   getAllTeams();
  // };
}

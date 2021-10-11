angular.module('teams').controller('TeamController', TeamController);

function TeamController(TeamFactory, $routeParams) {
  console.log('one team controller');
  const vm = this;
  const teamId = $routeParams.teamId;
  vm.isSubmitted = false;
  console.log(teamId);
  TeamFactory.getOne(teamId).then(function (response) {
    vm.team = response;
    console.log(vm.team);
  });
}

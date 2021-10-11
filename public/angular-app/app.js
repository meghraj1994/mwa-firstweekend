angular.module('teams', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/welcome.html',
    })
    .when('/teams', {
      templateUrl: 'angular-app/team-list-controller/teams.html',
      controller: 'TeamsController',
      controllerAs: 'vm',
    })
    .when('/teams/:teamId', {
      templateUrl: 'angular-app/team-controller/team.html',
      controller: 'TeamController',
      controllerAs: 'vm',
    })
    .otherwise({
      redirectTo: '/',
    });
}

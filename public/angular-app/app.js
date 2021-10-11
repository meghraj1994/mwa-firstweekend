angular.module('jobs', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'angular-app/welcome.html',
  });
  // .when('/teams', {
  //   templateUrl: 'angular-app/team-list-controller/teams.html',
  //   controller: 'TeamsController',
  //   controllerAs: 'vm',
  // })
  // .when('/jobs/:jobId', {
  //   templateUrl: 'angular-app/one-job/job.html',
  //   controller: 'JobController',
  //   controllerAs: 'vm',
  // })
  //     .otherwise({
  //       redirectTo: '/',
  //     });
}

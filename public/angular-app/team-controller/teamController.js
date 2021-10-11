angular.module('jobs').controller('JobController', JobController);

function JobController(JobFactory, $routeParams) {
  const vm = this;
  const jobId = $routeParams.jobId;
  vm.isSubmitted = false;
  console.log(jobId);
  JobFactory.getOneJob(jobId).then(function (response) {
    vm.job = response;
  });

 
}

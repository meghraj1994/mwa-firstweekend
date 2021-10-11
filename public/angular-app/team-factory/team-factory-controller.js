angular.module('jobs').factory('TeamFactory', TeamFactory);

function TeamFactory($http) {
  return {
    allTeams: allTeams,
    // getOneJob: getOneJob,
    // addOne: addOne,
    // deleteJob: deleteJob,
  };

  function allTeams() {
    return $http.get('/api/teams').then(complete).catch(failed);
  }

  // function addOne(game) {
  //   console.log('AddOne method', game);
  //   return $http.post('/api/jobs', game).then(complete).catch(failed);
  // }
  // function getOneJob(jobId) {
  //   console.log('OneJob method', jobId);
  //   return $http
  //     .get('/api/jobs/' + jobId)
  //     .then(complete)
  //     .catch(failed);
  // }
  // function deleteJob(id) {
  //   console.log('delete datafactory method');
  //   console.log(id);
  //   return $http
  //     .delete('/api/jobs/' + id)
  //     .then(complete)
  //     .catch(failed);
  // }

  function complete(response) {
    return response.data;
  }
  function failed(error) {
    return error.status.statusText;
  }
}

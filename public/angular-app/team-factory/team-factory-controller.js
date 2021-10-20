angular.module('teams').factory('TeamFactory', TeamFactory);

function TeamFactory($http) {
  return {
    allTeams: allTeams,
    getOne: getOne,
    addOne: addOne,
    deleteOne: deleteOne,
    updateTeam:updateTeam
  };

  function allTeams() {
    // console.log('get al team factory');
    return $http.get('/api/teams').then(complete).catch(failed);
  }

  function addOne(team) {
    console.log('add team Factory method', team);
    return $http.post('/api/teams',team).then(complete).catch(failed);
  }
  function getOne(teamId) {
    // console.log('OneTeam method', teamId);
    return $http
      .get('/api/teams/' + teamId)
      .then(complete)
      .catch(failed);
  }
  function deleteOne(id) {
    console.log('delete datafactory method');
    console.log(id);
    return $http
      .delete('/api/teams/' + id)
      .then(complete)
      .catch(failed);
  }
  function updateTeam(id,team) {
    console.log("Update Team");
    return $http.put('/api/teams/'+id,team).then(complete).catch(failed);
  }

  function complete(response) {
    console.log('add one compete resposnse')
    return response.data;
    
  }
  function failed(error) {
    return error.status.statusText;
  }
}

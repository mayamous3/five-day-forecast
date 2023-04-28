//*if input is philadelphia then do philadelphia call*//
$.ajax({
    url: philadelphia,
    method: 'GET',
  }).then(function (response) {
    console.log('Ajax Reponse \n-------------');
    console.log(response);
  });
  
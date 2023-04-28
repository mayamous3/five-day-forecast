//*if input is philadelphia then do philadelphia call*//
var philadelphia = 'api.openweathermap.org/data/2.5/forecast?q=Philadelphia&appid=4d93daea6566fa195be2bba47492c101'

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', philadelphia);
xhr.send();
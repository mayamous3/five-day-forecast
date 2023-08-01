function fetchWeatherAndDisplayForecast(city) {
//define the key and url used to access the api
    const Key = '4d93daea6566fa195be2bba47492c101';
    const Url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Key}`;

    //go and get the url / api data.
    fetch(Url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
    
    //call the function that will update the html file
        updateForecast(data); 
      })
      .catch(function (error) {
        console.log('Error fetching weather data:', error);
      });
  }

function updateForecast {
// select each of the day cards from the html file
// clear anything already there
// get the temperature wind and humidity for each day
}

//fetch('https://api.openweathermap.org/data/2.5/forecast?q=Philadelphia&appid=4d93daea6566fa195be2bba47492c101')
  //  .then(function (response) {
   //     return response.json();
    //})
    //.then(function (data) {
     //   console.log(data);
    //})
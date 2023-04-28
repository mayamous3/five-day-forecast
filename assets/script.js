

fetch('https://api.openweathermap.org/data/2.5/forecast?q=Philadelphia&appid=4d93daea6566fa195be2bba47492c101')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
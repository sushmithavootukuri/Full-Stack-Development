const API_KEY = 'd4da12f58838abe77e5f1c5f9e407d28';

//Gets all the countries from rest countries API
getWeatherReport=(type)=> {
    const REST_COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all';
    let request = new XMLHttpRequest();

    request.open('GET', REST_COUNTRIES_URL, true)
    request.send();

    request.onload = function () {
        var response = JSON.parse(this.response);
        console.log(response)
        type == 'city' ? displayCountriesWeatherByCity(response) : displayCountriesWeatherByLocation(response);
    }
    }

//Invokes openWeatherAPI by city for each country 
displayCountriesWeatherByCity = (countries)=> {
    countries.forEach(country => {
        let weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?q=' + country.capital + '&appid=' + API_KEY;
        weatherResponseByAPI(weatherAPI);
    });
}

//invokes openWeatherAPI by geographic location for each country
displayCountriesWeatherByLocation = (countries) => {
    countries.forEach(country => {
        let weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?lat=' + country.latlng[0] + '&lon=' + country.latlng[1] + '&appid=' + API_KEY;
        weatherResponseByAPI(weatherAPI);
    });
}

//Requests weatherAPI and Prints weather information in the console
 weatherResponseByAPI = (weatherAPI) =>{
    let request = new XMLHttpRequest();
    request.open('GET', weatherAPI, true);
    request.send();
    request.onload = function () {
        var response = JSON.parse(this.response);

        if (request.status === 200) 
            console.log("City : "+response.name," --- Temperature : "+response.main.temp," --- Description : "+response.weather[0].description)
        else 
            console.log(response.message);
    }  
  }


/* Function to create rows dynamically for displaying weather information
function createRows(city, temperature, description) {
    var table = document.getElementById("table");
    table.style.display = 'block';
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0).innerHTML = city;
    var cell2 = row.insertCell(1).innerHTML = temperature;
    var cell3 = row.insertCell(2).innerHTML = description;
}  */
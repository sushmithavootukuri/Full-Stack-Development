// create a request variable
var request = new XMLHttpRequest();

//open the request
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

//send request
request.send();

//load the response
request.onload = function () {
  var restCountriesResponse = JSON.parse(this.response);
  var lenarr = Object.keys(restCountriesResponse).length;
  for (const key in restCountriesResponse) {
    console.log(restCountriesResponse[key].name, restCountriesResponse[key].flag);
  }
};
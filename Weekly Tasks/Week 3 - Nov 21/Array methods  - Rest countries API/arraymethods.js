const REST_COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all';

let request = new XMLHttpRequest();
request.open('GET', REST_COUNTRIES_URL, true)
request.send();


request.onload = function () {

    //Handling Network error
    if (request.status != 200)
        throw new Error("Network Error with Http status code", request.status);
    else
        var countries = JSON.parse(this.response);

    try {


        //1.Get all the countries from Asia continent using Filter function
        console.log('Asian Countries : ');
        //Filtering countries belonging to Asia
        var asianCountries = countries.filter((country) => country.region === 'Asia');
        asianCountries.forEach(country => console.log('Name : ' + country.name, '  Region: ' + country.region));



        //2. Get all the countries with population of less than 2 lacs using Filter function
        console.log('\n\nCountries with population less than 2 lakhs : ');
        //Filtering countries with population of less than 2 lacs
        var lowPopulatedCountries = countries.filter((country) => country.population < 200000);
        lowPopulatedCountries.forEach(country => console.log('Name : ' + country.name, ' Population : ' + country.population));



        //3.Print the following details name, capital, flag using forEach function
        console.log('\n\nName, capital and flag of all countries : ');
        countries.forEach(country => console.log('Name : ' + country.name, ' Capital : ' + country.capital, ' Flag : ' + country.flag));



        //4.Print the total population of countries using reduce function
        let totalPopulation = countries.reduce((population, country) => population += country.population, 0);
        console.log('\n\nTotal population of all countries : ', totalPopulation);



        //5.Print the total population of countries in Asia continent using reduce and filter function
        let populationOfAsia = asianCountries.reduce((population, country) => population += country.population, 0);
        console.log('\n\nTotal population of Asian countries : ', populationOfAsia);



        //6.Print the country which use US Dollars as currency.
        console.log('\n\nCountries which use US Dollars as currency :')
        var countriesWithDollar = countries.filter((country) => country.currencies[0].code === 'USD');
        countriesWithDollar.forEach(country => console.log('Name : ' + country.name, ' Currency : ' + country.currencies[0].name));


    }
    catch (error) {
        console.log(error.message)
    }
}





//Global variables
var APIKey = "a63765ff57a3a40184a9d31d6874cc6a";

//Five-day forecast function
function getForecast() {
    var cityName = $("#userInput").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;
    console.log(cityName);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
        var results = response.list;

        for(var i = 0; i < 5; i++) {
            $("#five-day").text(JSON.stringify(results[i]));
        }
    });
};

//Current weather function
function getWeather() {
    var cityName = $("#userInput").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    console.log(cityName); 
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);

        $("#current-weather").text(JSON.stringify(response.main));

    });
};

//UV index function
function getUV() {
    var lat = reponse.coord.lat;
    var lon = response.coord.lon;
    var cityName = $("#userInput").val();
    var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
    console.log(cityName); 
    $.ajax({
        url: queryURL2,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);

    });
};


//Search button click event
$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    getForecast();
    getWeather();
    getUV();
});

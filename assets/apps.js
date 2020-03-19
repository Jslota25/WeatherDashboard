$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var APIKey = "a63765ff57a3a40184a9d31d6874cc6a"
    var cityName = $("#userInput").val(); 
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

    console.log(queryURL);
});
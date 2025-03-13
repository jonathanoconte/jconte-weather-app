window.getWeather = function() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "107bc5a99aa80b1a0083733077f41a21";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("location").innerHTML = data.name;
        document.getElementById("temperature").innerHTML = Math.floor(data.main.temp) + '°';
        document.getElementById("weather").innerHTML = data.weather[0].main;
        document.getElementById("weatherDes").innerHTML = data.weather[0].description;
        document.getElementById("humidity").innerHTML = data.main.humidity + '%';
        document.getElementById("wind").innerHTML = Math.floor(data.wind.speed) + ' mph';
      })
      .catch(error => console.error("Error:", error));
}
console.log("Javascipt is working...");


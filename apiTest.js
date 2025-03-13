// Replace with your OpenWeather API Key
const apiKey = "107bc5a99aa80b1a0083733077f41a21";  
const city = "London";  // Change to any city
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Check full API response
    console.log(`Weather in ${data.name}: ${data.weather[0].description}`);
    console.log(`Temperature: ${data.main.temp}°C`);
  })
  .catch(error => console.error("Error fetching data:", error));
var searchText = document.querySelector('#searchfield');
var searchButton = document.querySelector('#searchbutton');
var cityheader = document.querySelector('#cityheader');
var tempnow = document.querySelector('#tempnow');
var windnow = document.querySelector('#windnow');
var humidnow = document.querySelector('#humidnow');
var UVNow = document.querySelector('#UVnow');

var city = '';



searchButton.addEventListener('click', function () {
  city = searchText.value
  console.log(city)

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + '&units=imperial&appid=f9b6ea43279bd22f926c1e54b46af35a')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log('main', data.main)
      console.log(data.wind)
      cityheader.textContent = data.name
      tempnow.textContent = "Temperature: " + data.main.temp  + ' Farenheit'
      windnow.textContent = "Wind Speed: " + data.wind.speed + 'mph'
      humidnow.textContent = "Humidity: " + data.main.humidity + "%"

    })
})




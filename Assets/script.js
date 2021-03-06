var searchText = document.querySelector('#searchfield');
var searchButton = document.querySelector('#searchbutton');
var cityheader = document.querySelector('#cityheader');
var tempnow = document.querySelector('#tempnow');
var windnow = document.querySelector('#windnow');
var humidnow = document.querySelector('#humidnow');
var UVNow = document.querySelector('#UVnow');
var currentCard = document.querySelector('#currentcard');
var fiveDay = document.querySelector('#fivedayforecast');
let maincol = document.querySelector('#maincol')
let previousSearch0 = document.querySelector('#recentsearch0')

var city = '';
var currentTime = '';
previousSearch0.textContent = localStorage.getItem('previoussearch0')
console.log(previousSearch0.innerHTML)

previousSearch0.addEventListener('click', function() {
  city = previousSearch0.innerHTML
  
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + '&units=imperial&appid=ea7c6aed441b6888e5a12f5ec4d6ed26')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    lat = data.coord.lat;
    long = data.coord.lon;
    cityheader.textContent = data.name
    currentCard.setAttribute('style', 'display:block')
    maincol.setAttribute('style', 'display:block')



    console.log(lat)
    console.log(long)
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=alerts&units=imperial&appid=ea7c6aed441b6888e5a12f5ec4d6ed26')
      .then(response => response.json())
      .then(data => {
        console.log(data)





        tempnow.textContent = "Temperature: " + data.current.temp + ' Farenheit'
        windnow.textContent = "Wind Speed: " + data.current.wind_speed + 'mph'
        humidnow.textContent = "Humidity: " + data.current.humidity + "%"
        UVNow.textContent = "UV Index : " + data.current.uvi

        for (i = 1; i < 6; i++) {
          console.log(data.daily[i])
          console.log("date" + i)
          currentTime = moment.unix(data.daily[i].dt).format("MM/DD/YYYY");
          document.querySelector("#date" + i).textContent = currentTime
          document.querySelector("#temp" + i).textContent = 'Temp: ' + data.daily[i].temp.day + 'F'
          document.querySelector('#humid' + i).textContent = 'Humidity: ' + data.daily[i].humidity + '%'
          document.querySelector('#wind' + i).textContent = 'Wind Speed: ' + data.daily[i].wind_speed + "MPH"

        }
      })
  })

})




searchButton.addEventListener('click', function () {
  city = searchText.value
  console.log(city)

  localStorage.setItem('previoussearch0', city)
  previousSearch0.textContent = localStorage.getItem('previoussearch0')

    searchText.value = '';



    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + '&units=imperial&appid=ea7c6aed441b6888e5a12f5ec4d6ed26')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        lat = data.coord.lat;
        long = data.coord.lon;
        cityheader.textContent = data.name
        currentCard.setAttribute('style', 'display:block')
        maincol.setAttribute('style', 'display:block')



        console.log(lat)
        console.log(long)
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=alerts&units=imperial&appid=ea7c6aed441b6888e5a12f5ec4d6ed26')
          .then(response => response.json())
          .then(data => {
            console.log(data)





            tempnow.textContent = "Temperature: " + data.current.temp + ' Farenheit'
            windnow.textContent = "Wind Speed: " + data.current.wind_speed + 'mph'
            humidnow.textContent = "Humidity: " + data.current.humidity + "%"
            UVNow.textContent = "UV Index : " + data.current.uvi

            for (i = 1; i < 6; i++) {
              console.log(data.daily[i])
              console.log("date" + i)
              currentTime = moment.unix(data.daily[i].dt).format("MM/DD/YYYY");
              document.querySelector("#date" + i).textContent = currentTime
              document.querySelector("#temp" + i).textContent = 'Temp: ' + data.daily[i].temp.day + 'F'
              document.querySelector('#humid' + i).textContent = 'Humidity: ' + data.daily[i].humidity + '%'
              document.querySelector('#wind' + i).textContent = 'Wind Speed: ' + data.daily[i].wind_speed + "MPH"

            }
          })
      })
    
  })
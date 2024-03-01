
const apiKey ="e51e6837caaa56e520c48dda4c3079d2";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'Km/h';

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./images/Mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

// toggle to dark mode

var darkIcon = document.getElementById("dark_icon");
var card = document.querySelector(".card");

darkIcon.onclick = function() {
    card.classList.toggle("dark_mode");
    if(card.classList.contains("dark_mode")){
        darkIcon.src = "./images/sun.png"
    }else{
        darkIcon.src = "./images/moon.png"
    }
}
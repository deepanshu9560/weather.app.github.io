const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const city = 'delhi';

const form = document.getElementById('formEl');
const search = form.querySelector('#search');
const weather = document.getElementById('weather');

const getWeather = async (city) => {
    weather.innerHTML = `<div class="loader"><h1><img src="4.gif"></h1></div>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    return showWeather(data);
};


const showWeather = (data) => {
    // console.log(data)
    // if (data) {
    if (data.cod == '404') {
        weather.innerHTML = '<h1 class="noDataFound">No data found</h1>';
        return;
    }
    console.log(data.cod)
    weather.innerHTML = `
    <div id="weatherChild">
    <div class="temp">
    <h1><span>Temp </span>${data.main.temp}</h1>
    <h1><span>Min Temp </span>${data.main.temp_min}</h1>
    <h1><span>Max Temp </span>${data.main.temp_max}</h1>
    </div>    
    <h2 class="haze">${data.weather[0].main}</h2>
    <h2 class="humidity"><span>Humidity </span>${data.main.humidity}</h2>
    <h2 class="pressure"><span>Pressure </span>${data.main.pressure}</h2>
    <h2 class="speed"><span>Wind Speed </span>${data.wind.speed}</h2>
    <div class="weatherImg">
    <img  src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png" alt="cloudy">
    </div>
    
    </div>
  `
    // }
}


form.addEventListener('submit', (e) => {
    // console.log();
    let searchVal = search.value;
    e.preventDefault();
    getWeather(searchVal);
})




// getWeather();



// showWeather();






// getWeather()

//show//


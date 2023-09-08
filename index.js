const apiKey = "4cdd89bc271c088d31fc7a7ff4a20e24";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

const keyHandler = (e) => {
    console.log("fn fired");
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
};

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", ()=>{
    if(searchBox){
            checkWeather(searchBox.value);
    }

});

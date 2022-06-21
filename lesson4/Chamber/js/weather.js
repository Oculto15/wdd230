const currentTemp = document.querySelector("#current-temp");
const currentWind = document.querySelector("#current-wind");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Santiago&units=metric&appid=7ab1d10dc93618cf38fe46aa0435107d";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data); // this is temporary for development only
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    currentWind.innerHTML = `${data.wind.speed.toFixed(0)}`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;


    // WindChill Formula

    let temp = data.main.temp.toFixed(0);
    speed = data.wind.speed.toFixed(0);
    builWC(speed, temp);

    function builWC(speed, temp){
    let feeltemp = document.querySelector(".windchill");

    if (temp >=10 & speed >5){
        let wc = 35.74 + 0.6215 * temp  - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        console.log(wc);

        wc = Math.floor(wc);
        wc = (wc > temp) ? temp : wc;
        feeltemp.innerHTML = `${wc}°C`;
    }

    else{
        feeltemp.innerHTML = "N/A"
    }

}
  });
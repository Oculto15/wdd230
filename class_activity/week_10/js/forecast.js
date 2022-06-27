

// const currentPressure = document.querySelector("#pressure")
// 
// const toDay = document.querySelector("#day")
// const city =  document.querySelector("#place")
// const showTime =  document.querySelector("#time")
// const showWeekDay = document.querySelector("#week-day")
// const visibility = document.querySelector("#visibility")

const lat = '-33.3667';
const lon = '-70.5167';
const units = 'metric';
const appid = '7ab1d10dc93618cf38fe46aa0435107d'
const url_link = 'https://api.openweathermap.org/data/2.5/forecast?'

const url = `${url_link}lat=${lat}&lon=${lon}&units=${units}&appid=${appid}`;

let forcastNextFiveDaysAt12 = []

fetch(url)
  .then((response) => response.json())
  .then((data) => {

      const array = data.list.map(item => {
        const hour = item.dt_txt.split(' ')[1]

        if (hour === '12:00:00') {
            forcastNextFiveDaysAt12.push(item)
        }
    })


    for (let i = 0; i < forcastNextFiveDaysAt12.length; i++) {
        const currentTemp = document.querySelector("#current-temp" + (i+1));
        const weatherIcon = document.querySelector("#weather-icon" + (i+1));
        const captionDesc = document.querySelector("figcaption" + (i+1)); 
        const currentWindSpeed = document.querySelector("#wind-speed" + (i+1))
        const iconsrc = `https://openweathermap.org/img/wn/${forcastNextFiveDaysAt12[i].weather[0].icon}@4x.png`;
        const desc = forcastNextFiveDaysAt12[i].weather[0].description;
        
        currentTemp.innerHTML = `${forcastNextFiveDaysAt12[i].main.temp.toFixed(0)}`;
        currentWindSpeed.innerHTML = `${forcastNextFiveDaysAt12[i].wind.speed.toFixed(0)}`;
        console.log(weatherIcon);
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
       

    // WindChill Formula

    let temp = `${forcastNextFiveDaysAt12[i].main.temp.toFixed(0)}`;
    let speed = `${forcastNextFiveDaysAt12[i].wind.speed.toFixed(0)}`;
    builWC(speed, temp);

    function builWC(speed, temp){
    let feeltemp = document.querySelector(".windchill" + (i+1));

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

      }
      const currentHumidity = document.querySelector("#humidity1");
      currentHumidity.innerHTML = `${forcastNextFiveDaysAt12[0].main.humidity.toFixed(0)}`;

//     currentHumidity.innerHTML = `${data.main.humidity.toFixed(0)}`;

//     currentWindSpeed.innerHTML = `${data.wind.speed.toFixed(0)}`;
//     visibility2 = `${data.visibility}`;
//     vis = visibility2/1000;
//     visibility.innerHTML = vis;
//     city.innerHTML = `${data.name}`;

//     const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
//     const desc = data.weather[0].description;

//     weatherIcon.setAttribute("src", iconsrc);
//     weatherIcon.setAttribute("alt", desc);
//     captionDesc.textContent = desc;

console.log(forcastNextFiveDaysAt12);

  });




const today = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//Function to get the correct integer for the index of the days array
function CheckDay(day) {
  // console.log(day) 
  if (day + today.getDay() > 6) {
    return day + today.getDay() - 7;
  } else {
    return day + today.getDay();
  }
}

for (i = 0; i < 5; i++) {
  document.querySelector(".day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}

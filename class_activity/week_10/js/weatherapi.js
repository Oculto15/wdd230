const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const currentHumidity = document.querySelector("#humidity")
const currentPressure = document.querySelector("#pressure")
const currentWindSpeed = document.querySelector("#wind-speed")
const toDay = document.querySelector("#day")
const city =  document.querySelector("#place")
const showTime =  document.querySelector("#time")
const showWeekDay = document.querySelector("#week-day")
const visibility = document.querySelector("#visibility")


const city_name = 'Cusco';
const units = 'imperial';
const appid = '7ab1d10dc93618cf38fe46aa0435107d'
const url_link = 'https://api.openweathermap.org/data/2.5/weather?'

const url = `${url_link}q=${city_name}&units=${units}&appid=${appid}`;

// const url = "https://api.openweathermap.org/data/2.5/weather?q=Cusco&units=imperial&appid=7ab1d10dc93618cf38fe46aa0435107d";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}`;
    currentHumidity.innerHTML = `${data.main.humidity.toFixed(0)}`;
    currentPressure.innerHTML = `${data.main.pressure.toFixed(0)}`;
    currentWindSpeed.innerHTML = `${data.wind.speed.toFixed(0)}`;
    visibility2 = `${data.visibility}`;
    vis = visibility2/1000;
    visibility.innerHTML = vis;
    city.innerHTML = `${data.name}`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;

  });

  const today = new Date();
  const day = today.toLocaleDateString('en-us', { weekday:"long", day:"numeric", month:"short"}) 
  const time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })
  const weekDay = today.toLocaleDateString('en-us', { weekday:"long"})
  toDay.innerHTML = day;
  showTime.innerHTML = time;
  showWeekDay.innerHTML = weekDay;
  
  console.log(day);
const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};

document.querySelector("#lastmod").textContent = document.lastModified;
document.getElementById("year").textContent = new Date().getFullYear();

// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);
// long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// Display message 
let weekday = new Array(7);
weekday[1] = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m." ;
weekday[2] = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m." ;

let currentDate = new Date();
weekdayValue = currentDate.getDay();

document.querySelector("#message").textContent = weekday[weekdayValue]


// Hidden information

// let rightNow = Date.now();
// document.querySelector("#visit-date").value = rightNow;
let membership = document.querySelector("#np");
let membership2 = document.querySelector("#bronze");
let membership3 = document.querySelector("#silver");
let membership4 = document.querySelector("#gold");

membership.onclick = function () {
  let item4 = document.querySelector("#benefits4");
  let item3 = document.querySelector("#benefits3");
  let item2 = document.querySelector("#benefits2");
  let item = document.querySelector("#benefits");
  item4.style.display = "none";
  item3.style.display = "none";
  item2.style.display = "none";
  item.style.display = "inline";
};

membership2.onclick = function () {
  let item4 = document.querySelector("#benefits4");
  let item3 = document.querySelector("#benefits3");
  let item2 = document.querySelector("#benefits2");
  let item = document.querySelector("#benefits");
  item4.style.display = "none";
  item3.style.display = "none";
  item2.style.display = "inline";
  item.style.display = "none";
};

membership3.onclick = function () {
  let item4 = document.querySelector("#benefits4");
  let item3 = document.querySelector("#benefits3");
  let item2 = document.querySelector("#benefits2");
  let item = document.querySelector("#benefits");
  item4.style.display = "none";
  item3.style.display = "inline";
  item2.style.display = "none";
  item.style.display = "none";
};

membership4.onclick = function () {
  let item4 = document.querySelector("#benefits4");
  let item3 = document.querySelector("#benefits3");
  let item2 = document.querySelector("#benefits2");
  let item = document.querySelector("#benefits");
  item4.style.display = "inline";
  item3.style.display = "none";
  item2.style.display = "none";
  item.style.display = "none";
};

// if (document.getElementById('yesCheck').checked) {
//     document.getElementById('ifYes').style.visibility = 'visible';
// }
// else document.getElementById('ifYes').style.visibility = 'hidden';

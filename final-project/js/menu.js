let breakfast = document.querySelector("#breakfast");
let lunch = document.querySelector("#lunch");
let dinner = document.querySelector("#dinner");
let beverage = document.querySelector("#beverage");
let desserts = document.querySelector("#desserts");


breakfast.onclick = function () {
    let item5 = document.querySelector("#desserts-img");
    let item4 = document.querySelector("#beverage-img");
    let item3 = document.querySelector("#dinner-img");
    let item2 = document.querySelector("#lunch-img");
    let item = document.querySelector("#breakfast-img");
    item5.style.display = "none";
    item4.style.display = "none";
    item3.style.display = "none";
    item2.style.display = "none";
    item.style.display = "block";
  };
  
  lunch.onclick = function () {
    let item5 = document.querySelector("#desserts-img");
    let item4 = document.querySelector("#beverage-img");
    let item3 = document.querySelector("#dinner-img");
    let item2 = document.querySelector("#lunch-img");
    let item = document.querySelector("#breakfast-img");
    item5.style.display = "none";
    item4.style.display = "none";
    item3.style.display = "none";
    item2.style.display = "block";
    item.style.display = "none";
  };
  
  dinner.onclick = function () {
    let item5 = document.querySelector("#desserts-img");
    let item4 = document.querySelector("#beverage-img");
    let item3 = document.querySelector("#dinner-img");
    let item2 = document.querySelector("#lunch-img");
    let item = document.querySelector("#breakfast-img");
    item5.style.display = "none";
    item4.style.display = "none";
    item3.style.display = "block";
    item2.style.display = "none";
    item.style.display = "none";
  };
  
  beverage.onclick = function () {
    let item5 = document.querySelector("#desserts-img");
    let item4 = document.querySelector("#beverage-img");
    let item3 = document.querySelector("#dinner-img");
    let item2 = document.querySelector("#lunch-img");
    let item = document.querySelector("#breakfast-img");
    item5.style.display = "none";
    item4.style.display = "block";
    item3.style.display = "none";
    item2.style.display = "none";
    item.style.display = "none";
  };

  desserts.onclick = function () {
    let item5 = document.querySelector("#desserts-img");
    let item4 = document.querySelector("#beverage-img");
    let item3 = document.querySelector("#dinner-img");
    let item2 = document.querySelector("#lunch-img");
    let item = document.querySelector("#breakfast-img");
    item5.style.display = "block";
    item4.style.display = "none";
    item3.style.display = "none";
    item2.style.display = "none";
    item.style.display = "none";
  };
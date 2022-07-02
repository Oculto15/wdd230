// Information company one
const companyOne = document.getElementById("companyOne");
const imgOne = document.getElementById("imgOne");
const messageOne = document.getElementById("messageOne");
const WebsiteOne = document.getElementById("WebsiteOne");
const phoneOne = document.getElementById("phoneOne");

// Information company one
const companyTwo = document.getElementById("companyTwo");
const imgTwo = document.getElementById("imgTwo");
const messageTwo = document.getElementById("messageTwo");
const WebsiteTwo = document.getElementById("WebsiteTwo");
const phoneTwo = document.getElementById("phoneTwo");

// Information company one
const companyThree = document.getElementById("companyThree");
const imgThree = document.getElementById("imgThree");
const messageThree = document.getElementById("messageThree");
const WebsiteThree = document.getElementById("WebsiteThree");
const phoneThree = document.getElementById("phoneThree");

const jsonURL = "json/spotligth.json";

fetch(jsonURL)
.then((response) => response.json())
.then((data) => {
    let SGcompanies = []
  data.forEach((company) => {
    if (company.membershipLevel == "Gold" || company.membershipLevel == "Silver") {
        SGcompanies.push(company);
    }
  });

  let times = 3;
  let comp = 0;
  for (var i = 0; i < times; i++) {
      let randomNumList = SGcompanies.length;
      let randomNumber = Math.floor(Math.random() * randomNumList);
      let randomCompany = SGcompanies.splice(randomNumber, 1);
      comp++
      if (comp == 1) {
        companyOne.textContent = randomCompany[0]["name"];
        imgOne.src = randomCompany[0]["imageURL"];
        imgOne.alt = `${randomCompany[0]["name"]} Company Logo`;
        messageOne.textContent = randomCompany[0]["message"];
        WebsiteOne.textContent = randomCompany[0]["url"];
        phoneOne.textContent = randomCompany[0]["phone"];
      } else if (comp == 2) {
        companyTwo.textContent = randomCompany[0]["name"];
        imgTwo.src = randomCompany[0]["imageURL"];
        imgTwo.alt = `${randomCompany[0]["name"]} Company Logo`;
        messageTwo.textContent = randomCompany[0]["message"];
        WebsiteTwo.textContent = randomCompany[0]["url"];
        phoneTwo.textContent = randomCompany[0]["phone"];
      } else {
        companyThree.textContent = randomCompany[0]["name"];
        imgThree.src = randomCompany[0]["imageURL"];
        imgThree.alt = `${randomCompany[0]["name"]} Company Logo`;
        messageThree.textContent = randomCompany[0]["message"];
        WebsiteThree.textContent = randomCompany[0]["url"];
        phoneThree.textContent = randomCompany[0]["phone"];
      };
    }
});
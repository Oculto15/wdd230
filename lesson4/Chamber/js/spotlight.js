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
      let tempCompany = SGcompanies.splice(randomNumber, 1);
      comp++
      if (comp == 1) {
        companyOne.textContent = tempCompany[0]["name"];
        imgOne.src = tempCompany[0]["imageURL"];
        imgOne.alt = `${tempCompany[0]["name"]} Company Logo`;
        messageOne.textContent = tempCompany[0]["message"];
        WebsiteOne.textContent = tempCompany[0]["url"];
        phoneOne.textContent = tempCompany[0]["phone"];
      } else if (comp == 2) {
        companyTwo.textContent = tempCompany[0]["name"];
        imgTwo.src = tempCompany[0]["imageURL"];
        imgTwo.alt = `${tempCompany[0]["name"]} Company Logo`;
        messageTwo.textContent = tempCompany[0]["message"];
        WebsiteTwo.textContent = tempCompany[0]["url"];
        phoneTwo.textContent = tempCompany[0]["phone"];
      } else {
        companyThree.textContent = tempCompany[0]["name"];
        imgThree.src = tempCompany[0]["imageURL"];
        imgThree.alt = `${tempCompany[0]["name"]} Company Logo`;
        messageThree.textContent = tempCompany[0]["message"];
        WebsiteThree.textContent = tempCompany[0]["url"];
        phoneThree.textContent = tempCompany[0]["phone"];
      };
    }
});
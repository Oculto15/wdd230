
const directoryCard = document.querySelector(".cards-conteiner");
const jsonURL = "../json/data.json";

fetch(jsonURL)
  .then((response) => response.json())
  .then((data) => {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    data["companies"].forEach((company) => {
      const element = populateCompany(company);
      section.append(element);
    });

    function populateCompany(company) {
      const card = document.createElement("section");
      const name = document.createElement("p");
      const portrait = document.createElement("img");
      const address = document.createElement("p");
      const phoneNumber = document.createElement("p");
      const email = document.createElement("a");

      name.textContent = company["name"];
      portrait.src = company["imageURL"];
      portrait.width = 300;
      portrait.height = 200;
      portrait.loading = "lazy";
      portrait.alt = "Company Logo";
      address.textContent = company["address"];
      phoneNumber.textContent = company["phone"];
      email.href = company["url"];
      email.textContent = company["url"];

      card.className = "cards";
      card.id = "cards";
      name.className = "name";
      address.className = "space"
      phoneNumber.className = "space"
      email.className = "space"

      card.appendChild(name);
      card.appendChild(portrait);
      card.appendChild(address);
      card.appendChild(phoneNumber);
      card.appendChild(email);
      directoryCard.appendChild(card);
    }
  });

grid.addEventListener("click", toGrid);
list.addEventListener("click", toList);

function toGrid() {
  let cardsView = document.querySelector("#cards-conteiner");
  let cardSection = document.querySelectorAll("#cards");

  cardsView.classList.add("cards-conteiner");
  cardSection.forEach((el) => el.classList.remove("listCard"));
  cardSection.forEach((el) => el.classList.add("cards"));
}

function toList() {


  let cardsView = document.querySelector("#cards-conteiner");
  let cardSection = document.querySelectorAll("#cards");

  cardsView.classList.remove("cards-conteiner");
  cardSection.forEach((el) => el.classList.remove("cards"));
  cardSection.forEach((el) => el.classList.add("listCard"));
}


const url = 'json/temples.json';
fetch(url)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) { 
const temples = jsonObject['temples'];
  temples.forEach(displayTemples);
});

function displayTemples(temples) {
    let templeName = document.createElement('h3');
    let templeImg = document.createElement('img');
    let contact = document.createElement('h4');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let tempServices = document.createElement('h4');
    let services = document.createElement('p');
    let tempSchedule = document.createElement('h4');
    let schedule = document.createElement('p');
    let tempClosures = document.createElement('h4');
    let closure2022 = document.createElement('h5');
    let closure2022N1 = document.createElement('p');
    let closure2022N2 = document.createElement('p');
    let closure2022N3 = document.createElement('p');
    let closure2022N4 = document.createElement('p');
    let closure2023 = document.createElement('h5');
    let closure2023N1 = document.createElement('p');
    let closure2023N2 = document.createElement('p');
    let closure2023N3 = document.createElement('p');
    let closure2023N4 = document.createElement('p');
    let l1 = document.createElement('li');

    templeName.textContent = `${temples["templeName"]}`;
    contact.textContent = "Contact Information";
    address.textContent = `Address: ${temples["address"]}`;
    phoneNumber.textContent = `Phone Number: ${temples["phoneNumber"]}`;
    tempServices.textContent = "Temple Services";
    services.textContent = `${temples["services"]}`;
    tempSchedule.textContent = "Temple Schedule";
    schedule.textContent = `${temples["schedule"]}`;
    tempClosures.textContent = "Temple Closures";
    closure2022.textContent = "Closures 2022";
    closure2022N1.textContent = `${temples["closure2022"][0]}`;
    closure2022N2.textContent = `${temples["closure2022"][1]}`;
    closure2022N3.textContent = `${temples["closure2022"][2]}`;
    closure2022N4.textContent = `${temples["closure2022"][3]}`;
    closure2023.textContent = "Closures 2023";
    closure2023N1.textContent = `${temples["closure2023"][0]}`;
    closure2023N2.textContent = `${temples["closure2023"][1]}`;
    closure2023N3.textContent = `${temples["closure2023"][2]}`;
    closure2023N4.textContent = `${temples["closure2023"][3]}`;

  
    address.className = 'temp-info';
    phoneNumber.className = 'temp-info';
    services.className = 'temp-info';
    schedule.className = 'temp-info';
    closure2022N1.className = 'temp-info';
    closure2022N2.className = 'temp-info';
    closure2022N3.className = 'temp-info';
    closure2022N4.className = 'temp-info';
    closure2023N1.className = 'temp-info';
    closure2023N2.className = 'temp-info';
    closure2023N3.className = 'temp-info';
    closure2023N4.className = 'temp-info';
    templeName.className = 'temp-title'
    templeName.className = 'near'
    templeImg.className = 'center-img';
    l1.textContent = `${temples["describe"]}`;
    

 
    document.querySelector('.temp-cards div').appendChild(templeName);
    document.querySelector('.temp-cards div').appendChild(templeImg);
    document.querySelector('.temp-cards div').appendChild(contact);
    document.querySelector('.temp-cards div').appendChild(address); 
    document.querySelector('.temp-cards div').appendChild(phoneNumber); 
    document.querySelector('.temp-cards div').appendChild(tempServices); 
    document.querySelector('.temp-cards div').appendChild(services); 
    document.querySelector('.temp-cards div').appendChild(tempSchedule);
    document.querySelector('.temp-cards div').appendChild(schedule);
    document.querySelector('.temp-cards div').appendChild(tempClosures);
    document.querySelector('.temp-cards div').appendChild(closure2022);
    document.querySelector('.temp-cards div').appendChild(closure2022N1);
    document.querySelector('.temp-cards div').appendChild(closure2022N2);
    document.querySelector('.temp-cards div').appendChild(closure2022N3);
    document.querySelector('.temp-cards div').appendChild(closure2022N4);
    document.querySelector('.temp-cards div').appendChild(closure2023);
    document.querySelector('.temp-cards div').appendChild(closure2023N1);
    document.querySelector('.temp-cards div').appendChild(closure2023N2);
    document.querySelector('.temp-cards div').appendChild(closure2023N3);
    document.querySelector('.temp-cards div').appendChild(closure2023N4);




    templeImg.setAttribute('src', `${temples["templeImg"]}`);
    templeImg.setAttribute('alt', `${temples["describe"]}`);
    templeImg.setAttribute('loading', 'lazy');
    templeImg.setAttribute('width', `${temples["width"]}`);
    templeImg.setAttribute('height', `${temples["height"]}`);

  }
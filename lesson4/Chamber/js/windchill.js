let temp = parseInt(document.querySelector(".celcius").innerHTML);
let speed = parseInt(document.querySelector(".speedkmh").innerHTML);;
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
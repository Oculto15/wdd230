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
window.onresize = () => {if (window.innerWidth > 760) 
mainnav.classList.remove("responsive");
};


function changewidth() { 
  var x = document.getElementById('iframe'); 
  x.style.width = "100%"; 
}




const moreMenu = document.querySelector('.more-menu-parent');
moreMenu.addEventListener("click", toggleMoreMenu);

function toggleMoreMenu() {
    console.log(this)
	this.querySelector('.more-menu').classList.toggle('active-more-menu');
}



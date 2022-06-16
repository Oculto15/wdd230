document.getElementById("myBtn").addEventListener("click", removeAttribute);


function removeAttribute() {
    document.getElementById("middlename").removeAttribute("required");
    document.getElementById("business-position").removeAttribute("required");
}



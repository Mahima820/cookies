document.addEventListener("DOMContentLoaded",function(){
    console.log("LOOOOADED COOOOOKIE")
    document.querySelector("#submit").addEventListener("click", tallyCookies);

    document.querySelector("#display").addEventListener("click", displayCookies);

    document.querySelector("#clear").addEventListener("click", clearCookiesField);
});
function tallyCookies() {
     document.cookie = "Lemon= " + document.getElementById("lemon").value;
     document.cookie = "Chip= " + document.getElementById("chip").value;
     document.cookie = "Sugar= " + document.getElementById("sugar").value;
     }

function displayCookies() {
     console.log(displayCookies)
     var cookieArray = document.cookie.split("; ");
     var lemon = Cookies.get("Lemon");
     var chip = Cookies.get("Chip");
     var sugar = Cookies.get("Sugar");
     document.querySelector(".displayLemon .number").innerText = lemon;
     document.querySelector(".displayChip .number").innerText = chip;
     document.querySelector(".displaySugar .number").innerText = sugar;


}

function clearCookiesField() {
     // Cookies.expire("Lemon");
     document.querySelectorAll(".number").forEach( e => e.innerText = "");
     Cookies.expire("Chip");
     Cookies.expire("Sugar");
     document.querySelector("#lemon").value = "";
     document.querySelector("#chip").value = "";
     document.querySelector("#sugar").value = "";
};
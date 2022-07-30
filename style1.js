// ------- js for toogle form --------
var logis = document.getElementById("LForm");
var regis = document.getElementById("RForm");
var indicator = document.getElementById("Indicator");

function Reg() {
    regis.style.transform = "translateX(0px)";
    logis.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}
function Logi() {
    regis.style.transform = "translateX(300px)";
    logis.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}
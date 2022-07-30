// --------JS for menu toogle-------

var menuitems = document.getElementById("menuitems");
menuitems.style.maxHeight = "0px";

function menutoggle() {
    if (menuitems.style.maxHeight == "0px") {
        menuitems.style.maxHeight = "200px"
    }
    else {
        menuitems.style.maxHeight = "0px"
    }
}

// ------- js for product img --------

var product_img = document.getElementById("product-img");
var small_img = document.getElementsByClassName("small-img");

small_img[0].onclick = function () {
    product_img.src = small_img[0].src
}
small_img[1].onclick = function () {
    product_img.src = small_img[1].src
}
small_img[2].onclick = function () {
    product_img.src = small_img[2].src
}
small_img[3].onclick = function () {
    product_img.src = small_img[3].src
}



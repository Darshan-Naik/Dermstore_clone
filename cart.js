var dataShopping = localStorage.getItem("BioCheckout");
var parseShopping = JSON.parse(dataShopping);


console.log(parseShopping);

var imgShopping = document.getElementById("img-shopping");
imgShopping.setAttribute("src",parseShopping.src);
document.getElementById("shopping-item").innerHTML = parseShopping.disp;
document.getElementById("shopping-item").innerHTML = parseShopping.disp;
document.getElementById("shopping-price").innerHTML = parseShopping.price;
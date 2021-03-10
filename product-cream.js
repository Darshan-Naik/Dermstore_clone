import {bio_products,brand_products,blog_product} from "./module/data.js"
console.log(bio_products);

let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
var num = params.get("i");
// var num = Math.floor((Math.random())*10);
console.log(bio_products[num]);

document.getElementById("h4-neocutis-link").innerHTML = bio_products[num].disp;
document.getElementById("title-product-cream-right").innerHTML = bio_products[num].disp;
document.getElementById("strong-price-product-cream").innerHTML = bio_products[num].price;
document.getElementById("strong-sale-price-product1").innerHTML = bio_products[num].sale;
document.getElementById("strong-sale-price-product2").innerHTML = bio_products[num].sale;
document.getElementById("strong-discount-product-cream").innerHTML = bio_products[num].discount;


var priceCream = bio_products[num].price;
var quantity = document.getElementById("quantity").value;






var img = document.getElementById("img-left-product-cream");
img.setAttribute("src",bio_products[num].src);

var arr=[];
function buyCream(){
    var JsonBio = JSON.stringify(bio_products[num]);
    localStorage.setItem("BioCheckout",JsonBio);
    // window.location.href="/cart.html";
}

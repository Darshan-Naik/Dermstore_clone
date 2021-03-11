import {bio_products,brand_products,blog_product} from "./module/data.js"

var items= JSON.parse(localStorage.getItem("items")) || [];

let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
var num = params.get("i");
var file = params.get("file");
if(file == "bio_products"){
document.getElementById("img-left-product-cream").src = bio_products[num].src;

document.getElementById("h4-neocutis-link").innerHTML = bio_products[num].disp;
document.getElementById("title-product-cream-right").innerHTML = bio_products[num].disp;
document.getElementById("strong-price-product-cream").innerHTML = bio_products[num].price;
document.getElementById("strong-sale-price-product1").innerHTML = bio_products[num].sale;
document.getElementById("strong-sale-price-product2").innerHTML = bio_products[num].sale;
document.getElementById("strong-discount-product-cream").innerHTML = bio_products[num].discount;

}
if(file == "brand_products"){
    document.getElementById("img-left-product-cream").src = brand_products[num].src;
    document.getElementById("h4-neocutis-link").innerHTML = brand_products[num].head;
    document.getElementById("title-product-cream-right").innerHTML = brand_products[num].head;
    document.getElementById("strong-price-product-cream").innerHTML = brand_products[num].price;
    document.getElementById("strong-sale-price-product1").innerHTML = brand_products[num].price;
    document.getElementById("strong-sale-price-product2").innerHTML = brand_products[num].price;
    document.getElementById("strong-discount-product-cream").innerHTML = brand_products[num].discount;
}

function Cart(img,name,price,qty){
    this.img = img;
    this.name = name;
    this.price = price;
    this.qty = qty;
}

document.querySelector("#buy-button-product").onclick = function (){
    var item;
    let qty = document.querySelector("#quantity").value
    if(file == "bio_products"){
      item = new Cart(bio_products[num].src,bio_products[num].disp,bio_products[num].sale,qty)
    }
    if(file == "brand_products"){
        item = new Cart(brand_products[num].src,brand_products[num].head,brand_products[num].price,qty)
      }
    items.push(item)
    localStorage.setItem("items",JSON.stringify(items))
    console.log(items);
    document.querySelector("#buy-button-product").textContent = "Added"
}
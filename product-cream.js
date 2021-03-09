var bio_products = [
    {
        src : "https://media.dermstore.com/catalog/500517/300x300/11062.jpg",
        disp : "LUMIÈRE® Illuminating Eye Cream (0.5 fl. oz.)",
        price : "$97.00",
        sale: "Sale: $77.60",
        discount : "20% off with code",
        code : "GLOWUP"                               
    },
    {
        src : "https://media.dermstore.com/catalog/500517/300x300/82326.jpg",
        disp : " BIO SERUM FIRM Rejuvenating Growth Factor and Peptide Treatment (1 fl. oz.)",
        price : "$275.00",
        sale: "Sale: $220.00",
        discount : "20% off with code",
        code : "GLOWUP"                               
    },
    {
        src : "https://media.dermstore.com/catalog/500517/300x300/84137.jpg",
        disp : " LUMIÈRE® FIRM RICHE Extra Moisturizing Illuminating & Tightening Eye Cream (0.5 fl. oz.)",
        price : "$118.00",
        sale: "Sale: $94.40",
        discount : "20% off with code",
        code : "GLOWUP"                               
    },
    {
        src : "https://media.dermstore.com/catalog/500517/300x300/84138.jpg",
        disp : " LUMIÈRE® FIRM Illuminating & Tightening Eye Cream (0.5 fl. oz.)",
        price : "$108.00",
        sale: "Sale: $86.40",
        discount : "20% off with code",
        code : "GLOWUP"                               
    },
    {
        src : "https://media.dermstore.com/catalog/500517/300x300/11062.jpg",
        disp : " NEO Firm Neck & Décolleté Tightening Cream (50 g.)",
        price : "$135.00",
        sale: "Sale: $108.00",
        discount : "20% off with code",
        code : "GLOWUP"                               
    },
    {
        src : "https://media.dermstore.com/catalog/500517/300x300/82326.jpg",
        disp : " BIO SERUM FIRM Rejuvenating Growth Factor and Peptide Treatment (1 fl. oz.)",
        price : "$275.00",
        sale: "Sale: $220.00",
        discount : "20% off with code",
        code : "GLOWUP"                               
    },
    {
        src : "https://media.dermstore.com/catalog/500517/300x300/84137.jpg",
        disp : " LUMIÈRE® FIRM RICHE Extra Moisturizing Illuminating & Tightening Eye Cream (0.5 fl. oz.)",
        price : "$118.00",
        sale: "Sale: $94.40",
        discount : "20% off with code",
        code : "GLOWUP"                               
    },
    {
        src : "https://media.dermstore.com/catalog/500517/300x300/84138.jpg",
        disp : " LUMIÈRE® FIRM Illuminating & Tightening Eye Cream (0.5 fl. oz.)",
        price : "$108.00",
        sale: "Sale: $86.40",
        discount : "20% off with code",
        code : "GLOWUP"                               
    },
    {
        src : "https://media.dermstore.com/catalog/500517/300x300/84137.jpg",
        disp : " LUMIÈRE® FIRM RICHE Extra Moisturizing Illuminating & Tightening Eye Cream (0.5 fl. oz.)",
        price : "$118.00",
        sale: "Sale: $94.40",
        discount : "20% off with code",
        code : "GLOWUP"                               
    },
    {
        src : "https://media.dermstore.com/catalog/500517/300x300/84138.jpg",
        disp : " LUMIÈRE® FIRM Illuminating & Tightening Eye Cream (0.5 fl. oz.)",
        price : "$108.00",
        sale: "Sale: $86.40",
        discount : "20% off with code",
        code : "GLOWUP"                               
    }
];
//console.log(bio_products);

var num = Math.floor((Math.random())*10);
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

function buyCream(){
    console.log("Hi");
    localStorage.setItem("QuantityCream", quantity);
    localStorage.setItem("PriceCream",priceCream);
    window.location.href="/cart.html";
}

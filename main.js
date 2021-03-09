let top_header = document.querySelector(".header_top")
let header_nav = document.querySelector(".header_nav")
window.onscroll = ()=>{
     if(scrollY >250){
        header_nav.classList.add("bottom_line")
        top_header.style.marginTop = "-60px";
    }
    if(scrollY <550){
        top_header.style.marginTop = "0px";
    }
}

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
]


let product_cont = document.querySelector(".boi_scroll")
bio_products.forEach(el=>{
    let div =document.createElement("div")
    let img = document.createElement("img")
    let product = document.createElement("p")
    let price = document.createElement("p")
    let code = document.createElement("p")
    img.src= el.src
    product.textContent = el.disp
    product.classList.add("discription")
    price.innerHTML = `${el.price}<strong>${el.sale}</strong>`
    code.innerHTML =`${el.discount}<strong>${el.code}</strong>`
    div.classList.add("product")
    div.append(img,product,price,code)
    product_cont.append(div)
})


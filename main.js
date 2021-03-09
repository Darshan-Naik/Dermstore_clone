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

var product_cont = document.querySelector(".boi_scroll")
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

document.querySelector(".up").onclick = ()=>{
product_cont.scrollBy({
    top: 0,
    left: -600,
    behavior: 'smooth'
  });
}
document.querySelector(".downn").onclick = ()=>{
    product_cont.scrollBy({
        top: 0,
        left: 600,
        behavior: 'smooth'
      });
}
product_cont.onscroll = () =>{
    if(event.srcElement.scrollLeft == 0){
        document.querySelector(".up").style.display = "none"
        document.querySelector(".downn").style.display = "block"
    } else{
        document.querySelector(".up").style.display = "block"
    }
    if(event.srcElement.scrollLeft > 1036){
        document.querySelector(".up").style.display = "block"
        document.querySelector(".downn").style.display = "none"
    }else{
        document.querySelector(".downn").style.display = "block"
    }
    console.log(event.srcElement.scrollLeft);

    //
}

var brand_products = [
    {
        src : "https://media.dermstore.com/catalog/500300/300x300/20567.jpg",
        head : "Olaplex",
        disp : " No. 5 Bond Maintenance™ Conditioner (8.5 fl. oz.)",
        price : "$28.0",
        discount : "Earn 2x Dermstore Rewards Points",                       
    },
    {
        src : "https://media.dermstore.com/catalog/500300/300x300/63585.jpg",
        disp : " BIO SERUM FIRM Rejuvenating Growth Factor and Peptide Treatment (1 fl. oz.)",
        price : "$275.00",
        discount : "Earn 2x Dermstore Rewards Points",                              
    },
    {
        src : "https://media.dermstore.com/catalog/500221/300x300/39156.jpg",
        disp : " LUMIÈRE® FIRM RICHE Extra Moisturizing Illuminating & Tightening Eye Cream (0.5 fl. oz.)",
        price : "$118.00",
        discount : "Earn 2x Dermstore Rewards Points",                              
    },
    {
        src : "https://media.dermstore.com/catalog/505555/300x300/79300.jpg",
        disp : " LUMIÈRE® FIRM Illuminating & Tightening Eye Cream (0.5 fl. oz.)",
        price : "$108.00",
        discount : "Earn 2x Dermstore Rewards Points",                             
    },
    {
        src : "https://media.dermstore.com/catalog/505555/300x300/79298.jpg",
        head : "Olaplex",
        disp : " No. 5 Bond Maintenance™ Conditioner (8.5 fl. oz.)",
        price : "$28.0",
        discount : "Earn 2x Dermstore Rewards Points",                       
    },
    {
        src : "https://media.dermstore.com/catalog/500087/300x300/82143.jpg",
        disp : " BIO SERUM FIRM Rejuvenating Growth Factor and Peptide Treatment (1 fl. oz.)",
        price : "$275.00",
        discount : "Earn 2x Dermstore Rewards Points",                              
    },
    {
        src : "https://media.dermstore.com/catalog/501690/300x300/74436.jpg",
        disp : " LUMIÈRE® FIRM RICHE Extra Moisturizing Illuminating & Tightening Eye Cream (0.5 fl. oz.)",
        price : "$118.00",
        discount : "Earn 2x Dermstore Rewards Points",                              
    },
    {
        src : "https://media.dermstore.com/catalog/505711/300x300/82048.jpg",
        disp : " LUMIÈRE® FIRM Illuminating & Tightening Eye Cream (0.5 fl. oz.)",
        price : "$108.00",
        discount : "Earn 2x Dermstore Rewards Points",                             
    },
    {
        src : "https://media.dermstore.com/catalog/500087/300x300/82133.jpg",
        disp : " NEO Firm Neck & Décolleté Tightening Cream (50 g.)",
        price : "$135.00",
        discount : "Earn 2x Dermstore Rewards Points",                              
    },
    {
        src : "https://media.dermstore.com/catalog/501690/300x300/82997.jpg",
        disp : " BIO SERUM FIRM Rejuvenating Growth Factor and Peptide Treatment (1 fl. oz.)",
        price : "$275.00",
        discount : "Earn 2x Dermstore Rewards Points",                              
    },
    {
        src : "https://media.dermstore.com/catalog/500221/300x300/47301.jpg",
        disp : " LUMIÈRE® FIRM RICHE Extra Moisturizing Illuminating & Tightening Eye Cream (0.5 fl. oz.)",
        price : "$118.00",
        discount : "Earn 2x Dermstore Rewards Points",                              
    },
    {
        src : "https://media.dermstore.com/catalog/505475/300x300/77221.jpg",
        disp : " LUMIÈRE® FIRM Illuminating & Tightening Eye Cream (0.5 fl. oz.)",
        price : "$108.00",
        discount : "Earn 2x Dermstore Rewards Points",                               
    }
]

var brand_cont = document.querySelector(".brand_scroll")
brand_products.forEach(el=>{
    let div =document.createElement("div")
    let img = document.createElement("img")
    let product = document.createElement("h3")
    let price = document.createElement("p")
    let code = document.createElement("p")
    let small = document.createElement("small")
    img.src= el.src
    code.textContent = el.disp
    code.classList.add("brand_discription")
    product.textContent = el.head

    price.innerHTML = el.price
    small.innerHTML =el.discount
    div.classList.add("brand_product")
    div.append(img,product,code,price,small)
    brand_cont.append(div)
})

document.querySelector("#up").onclick = ()=>{
    brand_cont.scrollBy({
        top: 0,
        left: -800,
        behavior: 'smooth'
      });
    }
    document.querySelector("#downn").onclick = ()=>{
        brand_cont.scrollBy({
            top: 0,
            left: 800,
            behavior: 'smooth'
          });
    }
    brand_cont.onscroll = () =>{
        if(event.srcElement.scrollLeft == 0){
            document.querySelector("#up").style.display = "none"
            document.querySelector("#downn").style.display = "block"
        } else{
            document.querySelector("#up").style.display = "block"
        }
        if(event.srcElement.scrollLeft > 1336){
            document.querySelector("#up").style.display = "block"
            document.querySelector("#downn").style.display = "none"
        }else{
            document.querySelector("#downn").style.display = "block"
        }
        console.log(event.srcElement.scrollLeft);
    
        //
    }
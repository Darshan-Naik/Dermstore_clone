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
var login = localStorage.getItem("Login")
console.log(login);
if(login == "true"){
    document.querySelector("#user").innerHTML = `Logout`
}
document.querySelector("#user").onclick = ()=>{
    localStorage.setItem("Login",false)
}

document.querySelector(".cart").onclick = ()=>{
    window.location.href="./cart.html";
}

let count_cart = JSON.parse(localStorage.getItem("items")).length
document.querySelector("#cart_count").textContent = `( ${count_cart} ) `
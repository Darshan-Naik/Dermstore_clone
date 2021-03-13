let top_header = document.querySelector(".header_top")
let header_nav = document.querySelector(".header_nav")
window.onscroll = ()=>{
     if(scrollY >250){
        header_nav.classList.add("bottom_line")
    }
}
var login = localStorage.getItem("Login")
if(login == "true"){
   let User_name = JSON.parse( localStorage.getItem("UserDetails"));
    document.querySelector("#user").innerHTML = `${User_name.accountName} / Logout`
}
document.querySelector("#user").onclick = ()=>{
    localStorage.setItem("Login",false)
}

document.querySelector(".cart").onclick = ()=>{
    window.location.href="./cart.html";
}

let count_cart = JSON.parse(localStorage.getItem("items")).length
document.querySelector("#cart_count").textContent = `( ${count_cart} ) `
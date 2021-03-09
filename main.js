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
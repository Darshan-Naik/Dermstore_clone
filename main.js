let top_header = document.querySelector(".header_top")
let header_nav = document.querySelector(".header_nav")
window.onscroll = ()=>{
    top_header.style.marginTop = "-50px";
    header_nav.classList.add("bottom_line","sticky")
}
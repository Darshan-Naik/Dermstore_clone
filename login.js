let top_header = document.querySelector(".header_top")
let header_nav = document.querySelector(".header_nav")
window.onscroll = ()=>{
    top_header.style.marginTop = "-50px";
    header_nav.classList.add("bottom_line","sticky")
}

function signup(){
        var email = document.getElementById("signup-email").value;
        var password = document.getElementById("signup-password").value;

        if(password.length>=8 && password.length<=20){
            console.log(email, password);

            function Details(email, password) {
              this.email = email;
              this.password = password;
            }
            var obj1 = new Details(email, password);
            console.log(obj1);
            var jsonObj = JSON.stringify(obj1);
            localStorage.setItem("DarmReg", jsonObj);
            alert("Registration Successful");
        } else {
            alert("Password must be in proper format")
        }
}

function signin(){
        var email2 = document.getElementById("login-email").value;
        var password2 = document.getElementById("login-password").value;

        //console.log(name, email, password, phone);

        var data = localStorage.getItem("DarmReg");
        //console.log(data);
        var obdata = JSON.parse(data);
        if (obdata.email == email2 && obdata.password == password2) {
          alert("Email and password is correct - Login Successful");
        } else {
          alert("Email and password is not correct");
        }
}
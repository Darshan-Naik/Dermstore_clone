function Details(email, password) {
  this.email = email;
  this.password = password;
}

function signup(){
        var email = document.getElementById("signup-email").value;
        var password = document.getElementById("signup-password").value;

        if(password.length>=8 && password.length<=20){
            console.log(email, password);

            var obj1 = new Details(email, password);
            console.log(obj1);
            var jsonObj = JSON.stringify(obj1);
            localStorage.setItem("DarmReg", jsonObj);
            document.getElementById("signup-email").value = "";
            document.getElementById("signup-password").value = "";
            alert("Registration Successful");
        } else {
            alert("Password must be in proper format")
        }
}
var email2;
function signin(){
         email2 = document.getElementById("login-email").value;
        var password2 = document.getElementById("login-password").value;

        //console.log(name, email, password, phone);

        var login=false;
        var data = localStorage.getItem("DarmReg");
        //console.log(data);
        var obdata = JSON.parse(data);
        if (obdata.email == email2 && obdata.password == password2) {
          alert("Login Successful");
          login = true;
          localStorage.setItem("Login",login);
          window.location.href = "./index.html";
        } else {
          alert("Email and password is not correct");
        }
}

function Forget_ps(){
  event.stopPropagation()
  document.querySelector(".forget").classList.remove("hide")
  document.querySelector("#reset_email").value = document.getElementById("login-email").value;
}
window.onclick = ()=>{

  document.querySelector(".forget").classList.add("hide")
}

function reset() {

  let email = document.querySelector("#reset_email").value
  let password = document.querySelector("#reset-password").value
  let R_password = document.querySelector("#reset2-password").value
  if(password.length>=8 && password.length<=20){
  if( password == R_password ){
    let obj1 = new Details(email, password);
    console.log(obj1);
    let jsonObj = JSON.stringify(obj1);
    localStorage.setItem("DarmReg", jsonObj);
    document.querySelector(".forget").classList.add("hide")
    alert("Password Reset Successful")
   document.querySelector("#reset_email").value = null
   document.querySelector("#reset-password").value = null
   document.querySelector("#reset2-password").value = null
  } else{
    alert("Password not match")
  }
  } else{
    alert("Password must be in proper format")
  }
 
}

document.querySelector(".forget").onclick = ()=>{
  event.stopPropagation()
}
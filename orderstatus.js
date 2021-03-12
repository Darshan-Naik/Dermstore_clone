var allDataUser = localStorage.getItem("UserDetails");

var objUser = JSON.parse(allDataUser);

console.log(objUser);
document.getElementById("thanks-message").innerHTML = "✨ Thanks For Ordering ✨, " + objUser.accountName;
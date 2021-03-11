var dataCart = localStorage.getItem("items");
var objDataCart = JSON.parse(dataCart);
//console.log(objDataCart);
var mainCartDiv = document.getElementById("shopping-table");

var sumAll = 0;

for(var i=0; i<objDataCart.length; i++){

    var hr = document.createElement("hr");

    //console.log(objDataCart[i]);
    var divCart = document.createElement("div");
    divCart.style.display = "flex";

    var divImg = document.createElement("div");
    var divName = document.createElement("div");
    var divQty = document.createElement("div");
    var divPrice = document.createElement("div");
    var divTotal = document.createElement("div");

    var imgItem = document.createElement("img");
    imgItem.setAttribute("src",objDataCart[i].img);
    divImg.appendChild(imgItem);
    imgItem.style.width = "100px";
    imgItem.style.marginLeft = "20px";

    var pName = document.createElement("p");
    pName.innerHTML = objDataCart[i].name;
    divName.appendChild(pName);
    divName.style.width = "30%";
    divName.style.marginLeft = "4%";
    divName.style.fontSize = "17px";


    var qtyAmmount = document.createElement("p");
    qtyAmmount.innerHTML = objDataCart[i].qty;
    divQty.appendChild(qtyAmmount);
    qtyAmmount.style.fontSize = "18px";
    qtyAmmount.style.fontWeight = "500";
    divQty.style.marginLeft = "6%";
    divQty.style.marginRight = "6%";

    var priceAmmount = document.createElement("p");
    var originalPrice = objDataCart[i].price.split("$");
    priceAmmount.innerHTML = "$ " + Number(originalPrice[1]);
    priceAmmount.style.fontSize = "18px"
    divPrice.appendChild(priceAmmount);
    divPrice.style.marginLeft = "7%";
    divPrice.style.marginRight = "6%";

    var totalAmmount = document.createElement("p");
    var amtBuy = objDataCart[i].qty * Number(originalPrice[1]);
    totalAmmount.innerHTML =  "$ " + amtBuy;
    divTotal.appendChild(totalAmmount);
    totalAmmount.style.fontSize = "18px"
    divTotal.style.marginLeft = "7%";
    divTotal.style.marginRight = "6%";

    sumAll = sumAll + amtBuy;

    divCart.appendChild(divImg);
    divCart.appendChild(divName);
    divCart.appendChild(divQty);
    divCart.appendChild(divPrice);
    divCart.appendChild(divTotal);

    mainCartDiv.appendChild(divCart);
    mainCartDiv.appendChild(hr);
}

//console.log(sumAll);

document.getElementById("point-reward").innerHTML = `You could earn ${sumAll*4} Dermstore Rewards points with this purchase.`;

var promoDiscountRate = 0;
// subtotal
document.getElementById("subtotal").innerHTML = "Subtotal | $ " + sumAll;
document.getElementById("finalPrice").innerHTML = "Total | $ " + (sumAll);

function promoDiscount(){
    var promoCode = document.getElementById("promo").value;
    if(promoCode == "GLOWUP" || promoCode == "glowup"){
        promoDiscountRate = sumAll / 5;
        document.getElementById("discount").innerHTML = "Promo Code Discount | $ " + promoDiscountRate;
        document.getElementById("finalPrice").innerHTML = "Total | $ " + (sumAll-promoDiscountRate);
    }
}


//buy with COD
function buyCOD(){
    var loginStatus = localStorage.getItem("Login");
    if(loginStatus == "true"){
        localStorage.removeItem("items");
        window.location.href = "./orderstatus.html";
    } else if(loginStatus == "false") {
        alert("Please Create An Account");
        window.location.href = "./login.html";
    }
}
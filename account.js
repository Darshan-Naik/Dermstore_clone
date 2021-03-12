function submitAccount(){
    var accountName =  document.getElementById("account-name").value;
    var accountAddress =  document.getElementById("account-address").value;
    var accountPin =  document.getElementById("account-pin").value;
    var accountPhone =  document.getElementById("account-phone").value;
    var accountDob =  document.getElementById("account-dob").value;

    //console.log(accountName, accountAddress, accountPin, accountPhone, accountDob);

    function Account(accountName, accountAddress, accountPin, accountPhone, accountDob){
        this.accountName = accountName;
        this.accountAddress = accountAddress;
        this.accountPin = accountPin;
        this.accountPhone = accountPhone;
        this.accountDob = accountDob;
    }
    var accDetails = new Account(accountName, accountAddress, accountPin, accountPhone, accountDob);
    var accJson = JSON.stringify(accDetails);
    console.log(accJson);

    localStorage.setItem("UserDetails", accJson);

    alert("Details Successfully Uploaded");
    window.location.href = "./login.html";
}
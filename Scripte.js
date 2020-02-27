document.getElementById("box_1").style.display = "none";
document.getElementById("box_0").style.display = "none";
var emailInput = document.getElementById("lastName");
var emailPara = document.getElementById("box_0");
var textInput = document.getElementById("text");
var textPara = document.getElementById("box_1");
var validetour = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$/;

function valide() {
    var email = document.getElementById("lastName").value;
    if (!validetour.test(email)) {
        emailInput.style.border = "1px solid red";
        emailInput.style.boxShadow = "0 0 0 2px  rgba(206, 110, 110, 0.699)";
        emailPara.style.display = "block";
        return false;
    } else {
        emailInput.style.border = "1px solid white";
        emailInput.style.boxShadow = "0 0 0 2px  rgb(51, 255, 0)";
        emailPara.style.display = "none";
    };
    return true;
};

function valideText() {
    var text = document.getElementById("text").value;
    if (text == "") {
        textInput.style.border = "1px solid red";
        textInput.style.boxShadow = "0 0 0 2px  rgba(206, 110, 110, 0.699)";
        textPara.style.display = "block";
        return false;
    } else {
        textInput.style.border = "1px solid white";
        textInput.style.boxShadow = "0 0 0 2px  rgb(51, 255, 0)";
        textPara.style.display = "none";
    };
    return true;
}
emailInput.addEventListener("blur", valide);
textInput.addEventListener("blur", valideText);

function sendMessage() {
    if ( valide() && valideText()){
        alert("Your message is sand !");
    }else{
        alert("Please Complite the information !")
    }
   
}
document.getElementById("send").onclick = sendMessage;
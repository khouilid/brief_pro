document.getElementById("box_1").style.display = "none";
document.getElementById("box_0").style.display = "none";

function valide() {
    var name = document.getElementById("firtName").value;
    var email = document.getElementById("lastName").value;
    var text = document.getElementById("text").value;
    if (email == "" && text == "") {
        // alert("You have entered an invalid Email");
        document.getElementById("lastName").style.border = "1px solid red";
        document.getElementById("lastName").style.boxShadow = "0 0 0 2px  rgba(206, 110, 110, 0.699)";
        document.getElementById("text").style.border = "1px solid red";
        document.getElementById("text").style.boxShadow = "0 0 0 2px  rgba(206, 110, 110, 0.699)";
        document.getElementById("box_1").style.display = "block";
        document.getElementById("box_0").style.display = "block";



    } else if (text == "") {
        // alert("You have entered a Message");
        document.getElementById("text").style.border = "1px solid red";
        document.getElementById("text").style.boxShadow = "0 0 0 2px  rgba(206, 110, 110, 0.699)";
        document.getElementById("lastName").style.border = "1px solid white";
        document.getElementById("lastName").style.boxShadow = "0 0 0 2px  rgb(51, 255, 0)";
        document.getElementById("box_1").style.display = "block";
        document.getElementById("box_0").style.display = "none";
    } else if (email == "") {
        document.getElementById("lastName").style.border = "1px solid red";
        document.getElementById("lastName").style.boxShadow = "0 0 0 2px  rgba(206, 110, 110, 0.699)";
        document.getElementById("text").style.border = "1px solid white";
        document.getElementById("text").style.boxShadow = "0 0 0 2px  rgb(51, 255, 0)";
        document.getElementById("box_0").style.display = "block";
        document.getElementById("box_1").style.display = "none";

    } else {
        alert("Your message is send")
        document.getElementById("lastName").style.border = "1px solid white";
        document.getElementById("lastName").style.boxShadow = "0 0 0 2px  rgb(51, 255, 0)";
        document.getElementById("text").style.border = "1px solid white";
        document.getElementById("text").style.boxShadow = "0 0 0 2px  rgb(51, 255, 0)";
        document.getElementById("box_1").style.display = "none";
        document.getElementById("box_0").style.display = "none";

    }

};

document.getElementById("send").onclick = function () {
    valide();
};
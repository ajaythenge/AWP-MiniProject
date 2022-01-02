var gamebodyFirst = document.getElementById("p1");
var gamebodyLast = document.getElementById("p4");
var jumpicon = document.getElementById("jumpicon");
var jump = document.getElementById("jump");


gamebodyFirst.addEventListener("mouseover", downArrow);
gamebodyLast.addEventListener("mouseover", upArrow);


function upArrow() {
    jumpicon.style.display = "block";
    jumpicon.src = "./images/186407_arrow_up_icon.png";
    jump.href = "#roglogo"
}


function downArrow() {
    jumpicon.style.display = "block";
    jumpicon.src = "./images/186411_arrow_down_icon.png";
    jump.href = "#contacttag"
}
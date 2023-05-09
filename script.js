let menu = document.querySelector("#categories");
let menuDiv = document.querySelector("#categories-div");
let menuDiv1 = document.querySelector("#categories-div div");

let links = document.getElementsByClassName(".categories-links");
let links2 = document.getElementsByClassName(".categories-links2");


menu.onmouseover = function() {mouseOver()};
menu.onmouseout = function() {mouseOut()};
menuDiv.onmouseover = function() {mouseOver()};
menuDiv.onmouseout = function() {mouseOut()};
menuDiv1.onmouseover = function() {mouseOver()};
menuDiv1.onmouseout = function() {mouseOut()};

// links.onclick = function() {mouseOver1()}
links.onmouseout = function() {mouseOut1()}

function mouseOver() {
    menuDiv.style.display = "flex";
    menu.style.padding = "3em 0";
}

function mouseOut() {
    menuDiv.style.display = "none";
    menu.style.padding = "0";
}

function mouseOver1(linkName){
    
    document.getElementById(linkName).classList.add("active-links2");
}

function mouseOut1(){
    // for (link of links2){
    //     link.classList.remove ("active-links2");
    // }
    document.getElementById(linkName).classList.remove("active-links2");

}
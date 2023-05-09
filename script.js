// start - burger menu
const menuBurger = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menuBurger.classList.contains("showMenu")) {
    menuBurger.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menuBurger.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )
// end - burger menu


// start - nav
let menuCategories = document.querySelector("#categories"); // variable of span with text "categories"
let menuDiv = document.querySelector("#categories-div"); // variable of container of categories
let menuDivDivs = document.getElementsByClassName("categories-div2"); // variable of containers of links of categories

function mouseOver() {
    menuDiv.style.display = "flex";
    menuCategories.style.padding = "3em 0";
    menuCategories.style.cursor = "pointer";
}    // this function adds content of categories
function mouseOut() {
    menuDiv.style.display = "none";
    menuCategories.style.padding = "0";
}   // this function removes content of categories
function mouseOver1(linkName){
    for (div of menuDivDivs){
        div.classList.remove ("active-links2");
    }
    document.getElementById(linkName).classList.add("active-links2");
}   // this function adds and removes child content of categories
// end - nav

// start - search bar

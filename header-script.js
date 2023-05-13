// start - burger menu
const menuBurger = document.querySelector(".menu"); //უკავშირდება ელემენტს კლასით menu
const menuItems = document.querySelectorAll(".menuItem"); //უკავშირდება ელემენტს კლასით menuItem
const hamburger= document.querySelector(".hamburger"); //უკავშირდება ელემენტს კლასით hamburger
const closeIcon= document.querySelector(".closeIcon"); //უკავშირდება ელემენტს კლასით closeIcon
const menuIcon = document.querySelector(".menuIcon"); //უკავშირდება ელემენტს კლასით menuIcon

function toggleMenu() {
  if (menuBurger.classList.contains("showMenu")) {
    menuBurger.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menuBurger.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  } // თუ menuBurger ელემენტი შეიცავს კლასს showMenu - menuBurger ელემენტს აკლდება კლასი showMenu, closeIcon-ს ქრება და menuIcon ჩნდება
    //სხვა შემთხვევაში menuBurger ელემენტს ემატება კლასი showMenu, closeIcon-ს ჩნდება და menuIcon ქრება
} // განსაზღვრავს რომელი ელემენტი იყოს ეკრანზე

hamburger.addEventListener("click", toggleMenu);
  menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }// ყველა ელემენტზე, კლასით menuItems, click-ის შემთხვევაში უკავშირდება toggleMenu ფუნქციას და ახორციელებს ლოგიკის შემოწმებას (რომელიც ყოველთვის გადავა else-ლოგიკას) 
) // click-ის შემთხვევაში უკავშირდება toggleMenu ფუნქციას და ახორციელებს ლოგიკის შემოწმებას (რომელიც ყოველთვის გადავა else-ლოგიკას)
// end - burger menu

// start - nav
let menuCategories = document.querySelector("#categories"); // ცვლადი, რომელიც უკავშირდება ელემენტს id-ით #categories 
let menuDiv = document.querySelector("#categories-div"); // ცვლადი, რომელიც უკავშირდება ელემენტს id-ით #categories-div
let menuDivDivs = document.getElementsByClassName("categories-div2"); // ცვლადი, რომელიც უკავშირდება ელემენტებს კლასით categories-div2

function mouseOver() {
    menuDiv.style.display = "flex";
    menuCategories.style.padding = "3em 0";
    menuCategories.style.cursor = "pointer";
}    // ამატებს content ელემენტს categories ელემენტიდან 
function mouseOut() {
    menuDiv.style.display = "none";
    menuCategories.style.padding = "0";
}    // მალავს(აქრობს) content ელემენტს categories ელემენტიდან 
function mouseOver1(linkName){
    for (div of menuDivDivs){
        div.classList.remove ("active-links2");
    }
    document.getElementById(linkName).classList.add("active-links2");
}   // ამადებს ან აკლებს child ელემენტ contents ელემენტიდან categories
// end - nav
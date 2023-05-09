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




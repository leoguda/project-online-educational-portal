const contents = document.getElementsByClassName("main-section1-contents");

function openTab(tabName){
    for(content of contents){
        content.classList.remove("active-contents");
    }// when clicked on p its removing active-contents class from css for particular content element from contents div
    document.getElementById(tabName).classList.add("active-contents");
    // when clicked on p its adding active-contents class in css to particular content element from contents div
}



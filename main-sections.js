const contents = document.getElementsByClassName("main-section1-contents");

function openTab(tabName){
    for(content of contents){
        content.classList.remove("active-contents");
    }// when clicked on p its removing active-contents class from css for particular content element from contents div
    document.getElementById(tabName).classList.add("active-contents");
    // when clicked on p its adding active-contents class in css to particular content element from contents div
}


const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector("button-right");
const prevButton = document.querySelector("button-left");


const slideSize = slides[0].getBoundingClientRect().width;

const firstFunc = (slide, index) => {
    slide.style.left = slideSize * index + 'px';
}
slides.forEach(firstFunc);

const moveBothSides = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+targetSlide.style.left+')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");

}
function moveRight() {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;

    moveBothSides(track, currentSlide,nextSlide)
}
function moveLeft() {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;

    moveBothSides(track, currentSlide,prevSlide)
}


// Tab
const contents = document.getElementsByClassName("main-section1-contents"); // უკავშირდება ელემენტებს რომლებსაც აქვთ main-section1-contents კლასი

function openTab(tabName){
    for(content of contents){
        content.classList.remove("active-contents");
    } // p ელემენტზე დაკლიკებისას ფუნქციის ეს ნაწილი active-contents კლასს აკლებს იმ კონკრეტულ კონტეინერს რომელზეც არის მინიჭებული
    document.getElementById(tabName).classList.add("active-contents");
    //p ელემენტზე დაკლიკებისას ფუნქციის ეს ნაწილი active-contents კლასს ამატებს იმ კონკრეტულ კონტეინერს რომლის id-იც არის მითითებული
    // when clicked on p its adding active-contents class in css to particular content element from contents div
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// carousel
const track = document.querySelector('.carousel-track'); // უშუალოდ სლაიდების კონტეინერი
const slides = Array.from(track.children); // სლაიდების კონტეინერში მდებარე კონტეინტერების array
const nextButton = document.querySelector("button-right"); // button ღილაკი, მარცხენა
const prevButton = document.querySelector("button-left"); // button ღილაკი, მარჯვენა


const slideSize = slides[0].getBoundingClientRect().width; // viewport-ის შესამაბის ინფორმაციას(მონაცემებს) იღებს კლიენტის ვებ გვერდიდან. 

const firstFunc = (slide, index) => {
    slide.style.left = slideSize * index + 'px';
} // სიგანეში ამატებს იმდენ ზომის ერთეულს (ამ შემთხვევაში px), რამდენიც საჭიროა, რათა კონტენტი გასცდეს კლიენტის viewport-ს, ანუ ხედვას
slides.forEach(firstFunc);//ყოველი სლაიდისთვის ხორციელდება firstFunc ფუნქცია

const moveBothSides = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+targetSlide.style.left+')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}   //
function moveRight() {
    const currentSlide = track.querySelector(".current-slide"); // უკავშირდება ყველა html ელემენტს, რომელსაც current-slide კლასი აქვს
    const nextSlide = currentSlide.nextElementSibling; // მოაქვს კონკრეტული ელემენტის მომდევნო ელემენტის კოორდინატები

    moveBothSides(track, currentSlide,nextSlide) // ფუნქციისათვის - moveBothSides, შესაბამისი არგუმენტების მიწოდება
} // click-ის დროს ელემენტს გადაანაცვლებს მარჯვნივ
function moveLeft() {
    const currentSlide = track.querySelector(".current-slide"); // უკავშირდება ყველა html ელემენტს, რომელსაც current-slide კლასი აქვს
    const prevSlide = currentSlide.previousElementSibling; // მოაქვს კონკრეტული ელემენტის წინამორბედი ელემენტის კოორდინატები

    moveBothSides(track, currentSlide,prevSlide) // ფუნქციისათვის - moveBothSides, შესაბამისი არგუმენტების მიწოდება
} // click-ის დროს ელემენტს გადაანაცვლებს მარცხნივ


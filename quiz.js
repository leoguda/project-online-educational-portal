const startButton = document.querySelector(".button-start"); // უკავშირდება ღილაკს რომელსაც button-start კლასი აქვს

function first(){
    document.getElementById("quiz-first").style.display="none"; // html-ის კონკრეტულ ელემენტს css-ში უცვლის სტილს   
    document.getElementById("quiz-second").style.display="flex"; // html-ის კონკრეტულ ელემენტს css-ში უცვლის სტილს   
} // გამოძახების შემთხვევაში მისი ფუნქციაა გააქროს კონტენტის პირველი გვერდი და გამოაჩინოს მომდევნო

const result = document.getElementById("result")  // უკავშირდება ელემენტს რომელსაც result კლასი აქვს
const radioButtons = document.querySelectorAll('input[name="hobby"]') // უკავშირდება ყველა input ელემენტს, რომელსაც name განსაზღვრული აქვს, როგორც hobby
let quizArray = [
    "By learning Web Design or Digital Design you could be a great Artist.",
    "By learning Computer Science you could be a great Developer and you might even create ultimate AI.",
    "By learning Foreign Languages you could be a great Polyglot and even get a job where traveling's involved.",
    "By learning Management you could be a great Sport Team Manager, or just a great Manager",
    "You should try it!"
] // array, რომელშიც შეტანილია ქვიზის შესაძლო პასუხები

function quiz(){
    let choice; // იქმნება ცვლადი მნიშვნელობის გარეშე

    for (const radioButton of radioButtons) {

        if (radioButton.checked) {
            
            choice=(radioButton.value);

            document.getElementById("quiz-second").style.display="none";
            document.getElementById("again").style.display="block";
            document.getElementById("result").style.display="block";

            if(choice=="drawing"){
                result.innerText= quizArray[0]+quizArray[4]
            }
            if(choice=="math"){
                result.innerText= quizArray[1]+quizArray[4]
            }
            if(choice=="reading"){
                result.innerText= quizArray[2]+quizArray[4]
            }
            if(choice=="sports"){
                result.innerText= quizArray[3]+quizArray[4]
            }
        } // თუ radio input ელემენტი არის მონიშნული, choice ცვლადს ენიჭება მონიშნული ელემენტის მნიშვნელობა. 
          //შემდეგ, თუ choice ცვლადის მნიშვნელობა ემთხვევა მოცემული 4 ლოგიკიდან რომელიმეს, ელემენტში id-ით result დაიბეჭდება შესაბამისი პასუხი. 
    } // ყოველ input radio ელემენტისათვის აკეთებს მასში განსაზღვრულ ფუნქციას
} // ქვიზის ლოგიკა

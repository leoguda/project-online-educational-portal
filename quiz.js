const startButton = document.querySelector(".button-start");

function first(){
    document.getElementById("quiz-first").style.display="none";
    document.getElementById("quiz-second").style.display="flex";
}

const result = document.getElementById("result")
const radioButtons = document.querySelectorAll('input[name="hobby"]')
let quizArray = [
    "By learning Web Design or Digital Design you could be a great Artist.",
    "By learning Computer Science you could be a great Developer and you might even create ultimate AI.",
    "By learning Foreign Languages you could be a great Polyglot and even get a job where traveling's involved.",
    "By learning Management you could be a great Sport Team Manager, or just a great Manager",
    "You should try it!"
]

function quiz(){
    let choice;
    document.getElementById.innerHtml

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
        }
    }
}

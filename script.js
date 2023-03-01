[
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
]

const startButton = document.getElementById("startbutton");
const nextButton = document.getElementById("nextbutton");
const questionContainer = document.getElementById("questionContainer");
const question = document.getElementById("question");
const answerButtons = document.getElementById("quetionsanswers");

let curQuestion;;
let randomQuestion;

startButton.addEventListener("click", gameController);
nextButton.addEventListener("click", () => {
    curQuestion++;
    nextQuetion();
})

function gameController() {

}

function nextQuetion() {
    
}
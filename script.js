const questions = [
    {
        question: "What is 4 + 4",
        answers: [
            { text: "8", correct: true},
            { text: "7", correct: false},
        ]
    },
    {
        question: "What is 4 + 1",
        answers: [
            { text: "5", correct: true},
            { text: "7", correct: false},
            { text: "0", correct: false},
            { text: "9", correct: false},
        ]
    },
    // {

    // },
    // {

    // },
    // {

    // },
    // {

    // },
]

const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const questionContainer = document.getElementById("questionContainer");
const question = document.getElementById("question");
const answerButtons = document.getElementById("quetionsanswers");

let curQuestion = 0;
let randomQuestion;

startButton.addEventListener("click", gameController);
nextButton.addEventListener("click", () => {
    curQuestion++;
    nextQuestion();
})

function gameController() {
    startButton.classList.add("hideItems");
    randomQuestion = questions.sort(() => Math.random() - .5);
    questionContainer.classList.remove("hideItems");
    nextQuestion(randomQuestion[curQuestion]);
}

function nextQuestion(question) {
    question.innerText = question.question;
    question.answers.forEach(element => {
        const button = document.createElement("button");
        button.innerHTML = element.text
        button.classList.add("button");
        button.addEventListener("click", handleAnswer)
    });
    answerButtons.appendChild(button)
}

function handleAnswer() {

}
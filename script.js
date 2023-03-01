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
const answerButtons = document.getElementById("questionsanswers");
const timer = document.getElementById("timer")

let curQuestion = 0;
let secondsLeft = 60;
let score = 0;
let timerIntervalId;


startButton.addEventListener("click", gameController);


function gameController() {
    startButton.classList.add("hideItems");
    questionContainer.classList.remove("hideItems");
    // nextQuestion(questions[curQuestion]);
    nextQuestion()
    timerIntervalId = setInterval(updateTimer, 1000);
}

function nextQuestion() {
    const question = questions[curQuestion];
    question.innerText = question.question;
    answerButtons.innerHTML = "";
    question.answers.forEach(element => {
        const button = document.createElement("button");
        button.innerHTML = element.text
        button.classList.add("button");
        button.addEventListener("click", () => {
             if(element.correct) {
                score++;
                console.log(score)
             } else {
                secondsLeft -+ 10;
             }

             curQuestion++
             if(curQuestion < questions.length) {
                nextQuestion();
             } else {
                endQuiz();
             }

        })

        answerButtons.appendChild(button)
    });
    
}

function endQuiz() {
    clearInterval(timerIntervalId);
    questionContainer.classList.add("hideItems");
    // finalScore.innerText = score;
    console.log(secondsLeft)
}

function updateTimer() {
    secondsLeft--;
    timer.innerHTML = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerIntervalId);
      endQuiz();
    }
  }

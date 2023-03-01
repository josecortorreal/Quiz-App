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
    {

        question: "JavaScript is the same as Java?",
        answers: [
         {text: "true", correct: false},
         {text: "false", correct: true},
        ]
    },
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
const initialsForm = document.getElementById("initials-form");
const initialsInput = document.getElementById("initials");

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
    initialsForm.classList.remove("hideItems");
}

function updateTimer() {
    secondsLeft--;
    timer.innerHTML = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerIntervalId);
      endQuiz();
    }
  }

  initialsForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const initials = initialsInput.value.toUpperCase();
    const newScore = {
      "initials": initials,
      "score": secondsLeft,
    };

    const makeString = JSON.stringify(newScore);
    localStorage.setItem("newScore", makeString);
    console.log(makeString)
    

  });

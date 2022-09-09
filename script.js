var quizPage = document.getElementById("quiz-page");
var countdownTimer = document.getElementById("timer");
questionIndex = 0;
var questions = [
    {
        question: "How do you declare a variable?",
        choices: ["a. bar;", "b. var;", "c. nav;"],
        answer: "b. var;",
    },
    {
        question: "What is a prompt box?",
        choices: ["a. allows the user to enter a vaule", "b. looping", "c. to represent no value"],
        answer: "a. allows the user to enter a value",
    },
    {
        question: "What does NULL mean?",
        choices: ["a. no value", "b. looping", "c. arrays"],
        answer: "a. no value",
    }, 
    {
        question: "What is a boolean?",
        choices: ["a. collection of characters", "b. stores integers", "c. stores values: true or false"],
        answer: 3
    },
];

var timeLeft;
var questionIndex;
var quizTimer; 

function startQuiz() {
    console.log("I need to start the quiz");
    timeLeft = 60
    var quizTimer = setInterval(function() {
        timeLeft --;
        countdownTimer.textContent = timeLeft;
    } ,1000);
    displayQuestion();
}
// function displayQuestion() {
//     var question = document.createElement("h1");


// }

































document.getElementById("start-btn").addEventListener("click", startQuiz);

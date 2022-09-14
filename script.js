var quizPage = document.getElementById("quiz-page");
var countdownTimer = document.getElementById("timer");
var startGame = document.getElementById("start-game");
var highScorePage = document.getElementById("high-score-list");
var submitScore = document.getElementById("highest-score");

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
var lastQuestion = questions[2].question;

var timeLeft;
var questionIndex;
var quizTimer; 
function checkAnswer(event) {}

function startQuiz() {
    console.log("I need to start the quiz");
    timeLeft = 60
    startTimers();
    startGame.style.display ="none";
    quizPage.style.display ="block";
    displayQuestion();
}

function startTimer() {
    quizTimer = setInterval(function() {
        timeLeft --;
        countdownTimer.textContent = timeLeft;
    } ,1000)
}

function endGame() {
    clearInterval(quizTimer);
    quizPage.style.display = "none";
    highScorePage.style.display ="block";
    document.getElementById("score").textContent = timeLeft;
}

function submitScore() {
    var initals = document.getElementById("initals").value;
    var allHighScore = localStorage.getItem("high-score");
    if (!allHighScore) {
        allHighScore = []
    }
    else {
        allHighScore= JSON.parse(allHighScore)
    }
    var newPerson = {
        initals: initals,
        score: timeLeft,
    }
    
    allHighScore.push(newPerson)
    submitQuiz.innerHTML=""
    allHighScore.forEach(scoreObject => {
        var highScoreDiv= document.createElement("p")
        highScoreDiv.textContent = scoreObject.initals + " : " + scoreObject.score
        submitQuiz.appendChild(highScoreDiv) 
    });
    localStorage.setItem(
        "high-score", JSON.stringify(allHighScore)
    )
}

function choicesSelector(event) {
    var userChoice = event.target.textContent;
    var currentAnswer = questions[questionIndex].answer;
    if (userChoice !== currentAnswer) {
        timeLeft -= 5;
        console.log(timeLeft);
    }
    if (lastQuestion !== questions[questionIndex].question) {
        questionIndex++
    } else {

        endGame()

    }
    quizPage.innerHTML=""
    displayQuestion ()
}

function displayQuestion() {
    var question = document.createElement("h1");
    question.textContent = questions[questionIndex].question;
    quizPage.appendChild(question);

    for (
        let index = 0;
        index < questions[questionIndex].choices.length;
        index++
    ) {
        const choice = questions[questionIndex].choices[index];
        var questionButton = document.createElement("button");
        questionButton.textContent = choice;
        questionButton.addEventListener("click", choicesSelector);
        quizPage.appendChild(questionButton);
    }
}





























document.getElementById("start-btn").addEventListener("click", startQuiz);

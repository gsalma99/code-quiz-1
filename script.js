var countdownTimer = document.getElementById("timer");
var quizPage = document.getElementById("quiz-page");
var startPage = document.getElementById("start-page");
var highScorePage = document.getElementById("high-score-page");
var submitButton = document.getElementById("submit-score");
var submitQuiz = document.getElementById("high-scores");

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
console.log(lastQuestion)

console.log(questions);
console.log(questions[1].choices[0]);
var questionIndex;
var timeLeft;
var quizTimer;

function checkAnswer(event) {}

function startQuiz() {
  timeLeft = 60;
  startTimer();
  startPage.style.display ="none";
  quizPage.style.display ="block";
  displayQuestion();
}
function endGame() {
clearInterval(quizTimer);
quizPage.style.display ="none";
highScorePage.style.display ="block";
document.getElementById("score").textContent = timeLeft;
}

function startTimer() {
   quizTimer = setInterval(function() {
    timeLeft --;
    countdownTimer.textContent = timeLeft;
  } ,1000);
}

function submitScore() {
  var initials = document.getElementById("initials").value;
  var allHighScores = localStorage.getItem("high-scores");
  if (!allHighScores) {
    allHighScores = []
  }
  else {
    allHighScores= JSON.parse(allHighScores)
  }
  var newPerson = {
    initials: initials,
    score: timeLeft,
  }
  console.log(newPerson);
  console.log(allHighScores);
  allHighScores.push(newPerson)
  console.log(allHighScores)
  submitQuiz.innerHTML=""
  allHighScores.forEach(scoreObject => {
   var highscoreDiv= document.createElement("p")
   highscoreDiv.textContent = scoreObject.initials + " : " + scoreObject.score
   submitQuiz.appendChild(highscoreDiv)
  });
  localStorage.setItem(
    "high-scores", JSON.stringify(allHighScores)
  )

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

function choicesSelector(event) {
  console.log(event.target);
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
  displayQuestion() 

}

document.getElementById("startquiz").addEventListener("click", startQuiz);
document.getElementById("quiz-page").addEventListener("click", checkAnswer);
submitButton.addEventListener("click", submitScore);
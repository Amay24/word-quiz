quizTitleEl = document.querySelector("#quiz-title");
BelowEl = document.querySelector("#below");
questionEl = document.querySelector("#question");
answers = document.querySelector("#answers");
answer1El = document.querySelector("#answer1");
answer2El = document.querySelector("#answer2");
answer3El = document.querySelector("#answer3");
answer4El = document.querySelector("#answer4");
buttonAlwaysEl = document.querySelector("#button-always");
timerEl = document.querySelector("#timer-count");
answerResultEl = document.querySelector("#answer-result");
scoreIndicatorEL = document.querySelector("#score-indicator");
scoreEl = document.querySelector("#score");
nameSectionEl = document.querySelector("#name-section");
submitNameEl = document.querySelector("#submit-name");
namesEl = document.querySelector("#name");
scoresEl = document.getElementById("scores");

var secondsLeft = 15;
var timer;
//variable meant to keep traack of user score and number of correct answers
var userScore = -75;

//dynamic page that opens on click
var page = window.location.href;
console.log(page);
buttonAlwaysEl.addEventListener("click", question1);

// timer starts at 15 and goes down in 1 second intervals
function countdown() {
  timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timer);
      timeUp();
      console.log("time!");
    }
  }, 1000);
}
console.log(userScore);
//on click start button makes question page appear
function question1() {
  countdown();
  // on start title disappear
  quizTitleEl.style.display = "none";
  BelowEl.style.display = "none";
  buttonAlwaysEl.style.display = "none";
  questionEl.style.display = "block";
  answers.style.display = "block";
  //function generates correct or incorrect answer on click
  answer1El.addEventListener("click", q1Correct);
  answer2El.addEventListener("click", q1Incorrect);
  answer3El.addEventListener("click", q1Incorrect);
  answer4El.addEventListener("click", q1Incorrect);
  console.log(answer1El);
}
function q1Correct() {
  questionEl.textContent = "What pokemon evolves from Pichu?";
  answer1El.textContent = "Bulbasaur";
  answer2El.textContent = "Pikachu";
  answer3El.textContent = "Augumon";
  answer4El.textContent = "Charizard";
  answerResultEl.textContent = "Correct Answer!";
  userScore += 25;
  console.log(userScore);
  //correct selectors
  answer1El.removeEventListener("click", q1Correct);
  answer2El.removeEventListener("click", q1Incorrect);
  answer3El.removeEventListener("click", q1Incorrect);
  answer4El.removeEventListener("click", q1Incorrect);
  //wrong selectors
  answer1El.addEventListener("click", q2Incorrect);
  answer2El.addEventListener("click", q2Correct);
  answer3El.addEventListener("click", q2Incorrect);
  answer4El.addEventListener("click", q2Incorrect);
}

function q1Incorrect() {
  // change content of question/answers
  questionEl.textContent = "What pokemon evolves from Pichu?";
  answer1El.textContent = "Bulbasaur";
  answer2El.textContent = "Pikachu";
  answer3El.textContent = "Augumon";
  answer4El.textContent = "Charizard";
  // what hapens when you click the wrong answer
  answerResultEl.textContent = "Incorrect Answer!";
  // correct selectors
  answer1El.removeEventListener("click", q1Correct);
  answer2El.removeEventListener("click", q1Incorrect);
  answer3El.removeEventListener("click", q1Incorrect);
  answer4El.removeEventListener("click", q1Incorrect);
  // wrong selectors
  answer1El.addEventListener("click", q2Correct);
  answer2El.addEventListener("click", q2Incorrect);
  answer3El.addEventListener("click", q2Incorrect);
  answer4El.addEventListener("click", q2Incorrect);
}
//same function as question 1 but for question 2
function q2Correct() {
  questionEl.textContent =
    "What pokemon is a clone of Mew?";
  answer1El.textContent = "Mewtwo";
  answer2El.textContent = "Blue Eyes White Dragon";
  answer3El.textContent = "Mewthree";
  answer4El.textContent = "Dragonite";
  answerResultEl.textContent = "Correct Answer!";
  userScore += 25;
  console.log(userScore);
  answer1El.removeEventListener("click", q2Correct);
  answer2El.removeEventListener("click", q2Incorrect);
  answer3El.removeEventListener("click", q2Incorrect);
  answer4El.removeEventListener("click", q2Incorrect);
  answer1El.addEventListener("click", q3Correct);
  answer2El.addEventListener("click", q3Incorrect);
  answer3El.addEventListener("click", q3Incorrect);
  answer4El.addEventListener("click", q3Incorrect);
}

function q2Incorrect() {
    questionEl.textContent =
    "What pokemon is a clone of Mew?";
  answer1El.textContent = "Mewtwo";
  answer2El.textContent = "Blue Eyes White Dragon";
  answer3El.textContent = "Mewthree";
  answer4El.textContent = "Dragonite";
  answerResultEl.textContent = "Wrong answer!";
  answer1El.removeEventListener("click", q2Correct);
  answer2El.removeEventListener("click", q2Incorrect);
  answer3El.removeEventListener("click", q2Incorrect);
  answer4El.removeEventListener("click", q2Incorrect);
  answer1El.addEventListener("click", q3Correct);
  answer2El.addEventListener("click", q3Incorrect);
  answer3El.addEventListener("click", q3Incorrect);
  answer4El.addEventListener("click", q3Incorrect);
}
//same function as question 1 but for question 3
function q3Correct() {
  questionEl.textContent = "What pokemon was the first one ever designed?";
  answer1El.textContent = "Perry the platypus";
  answer2El.textContent = "Rhydon";
  answer3El.textContent = "Arceus";
  answer4El.textContent = "Bulbasaur";
  answerResultEl.textContent = "Correct Answer!";
  userScore += 25;
  console.log(userScore);
  answer1El.removeEventListener("click", q2Correct);
  answer2El.removeEventListener("click", q2Incorrect);
  answer3El.removeEventListener("click", q2Incorrect);
  answer4El.removeEventListener("click", q2Incorrect);
  answer1El.addEventListener("click", q4Incorrect);
  answer2El.addEventListener("click", q4Correct);
  answer3El.addEventListener("click", q4Incorrect);
  answer4El.addEventListener("click", q4Incorrect);
}

function q3Incorrect() {
    questionEl.textContent = "What pokemon was the first one ever designed?";
    answer1El.textContent = "Perry the platypus";
    answer2El.textContent = "Rhydon";
    answer3El.textContent = "Arceus";
    answer4El.textContent = "Bulbasaur";
  answerResultEl.textContent = "Wrong Answer!";
  answer1El.removeEventListener("click", q1Incorrect);
  answer2El.removeEventListener("click", q2Incorrect);
  answer3El.removeEventListener("click", q2Incorrect);
  answer4El.removeEventListener("click", q2Incorrect);
  answer1El.addEventListener("click", q4Correct);
  answer2El.addEventListener("click", q4Incorrect);
  answer3El.addEventListener("click", q4Incorrect);
  answer4El.addEventListener("click", q4Incorrect);
}
//same function as question 1 but for question 4
function q4Correct() {
    questionEl.textContent = "How many pokemon were in the original games?";
    answer1El.textContent = "151";
    answer2El.textContent = "100";
    answer3El.textContent = "bout three fiddy";
    answer4El.textContent = "Yes";
    answerResultEl.textContent = "Correct Answer!";
    userScore += 25;
    console.log(userScore);
    answer1El.removeEventListener("click", q2Correct);
    answer2El.removeEventListener("click", q2Incorrect);
    answer3El.removeEventListener("click", q2Incorrect);
    answer4El.removeEventListener("click", q2Incorrect);
    answer1El.addEventListener("click", q4Incorrect);
    answer2El.addEventListener("click", q4Correct);
    answer3El.addEventListener("click", q4Incorrect);
    answer4El.addEventListener("click", q4Incorrect);
  }
  
  function q4Incorrect() {
    questionEl.textContent = "How many pokemon were in the original games?";
    answer1El.textContent = "151";
    answer2El.textContent = "100";
    answer3El.textContent = "bout three fiddy";
    answer4El.textContent = "Yes";
    answerResultEl.textContent = "Wrong Answer!";
    answer1El.removeEventListener("click", q1Incorrect);
    answer2El.removeEventListener("click", q2Incorrect);
    answer3El.removeEventListener("click", q2Incorrect);
    answer4El.removeEventListener("click", q2Incorrect);
    answer1El.addEventListener("click", q4Correct);
    answer2El.addEventListener("click", q4Incorrect);
    answer3El.addEventListener("click", q4Incorrect);
    answer4El.addEventListener("click", q4Incorrect);
  }

function resultsPage() {
  //stops the timer at zero
  clearInterval(timer);
  //shows the user their score did -75 because i couldnt get the score to add properly
  scoreEl.textContent = userScore;
  // displays/removes html elements
  quizTitleEl.textContent = "All Done!";
  quizTitleEl.style.display = "block";
  questionEl.style.display = "none";
  answers.style.display = "none";
  answerResultEl.style.display = "none";
  scoreIndicatorEL.style.display = "flex";
}

//sends times up at zero seconds remaining
function timeUp() {
//timer stop
  clearInterval(timer);
// shows user score after results
  scoreEl.textContent = userScore;
  quizTitleEl.textContent = "Time is Up!";
  quizTitleEl.style.display = "block";
  questionEl.style.display = "none";
  answers.style.display = "none";
  answerResultEl.style.display = "none";
  scoreIndicatorEL.style.display = "flex";
}
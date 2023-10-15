const questions = [
  //Questions
  {
      question: "What is 10 + 2?",
      choices: ["12", "4", "5", "6"],
      correctAnswer: "12",
  },
  {
    question: "Which animal locks their legs when asleep?",
    choices: ["Horses", "Cows", "Kangaroo"],
    correctAnswer: "Horses",
},
{
  question: "Which starter class uses a bow?",
  choices: ["Barbarian", "Archer", "Mage", "Fighter"],
  correctAnswer: "Archer",
},
{
  question: "What city is the capital of California?",
  choices:["Oakand", "Vallejo","San Francisco", "Sacramento"],
  correctAnswer: "Sacramento",

},
];
//Const statements
const startButton = document.getElementById("start-button");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const timeLeftElement = document.getElementById("time-left");
const finalScoreElement = document.getElementById("final-score");
const initialsElement = document.getElementById("initials");
const saveScoreButton = document.getElementById("save-score");

let currentQuestionIndex = 0;
let timeLeft = 60;
let timer;
//functions w/ if-else statements
function startQuiz() {
  startButton.style.display = "none";
  quizScreen.style.display = "block";
  setTimer();
  showQuestion();
}

function setTimer() {
  timer = setInterval(function() {
      timeLeft--;
      timeLeftElement.textContent = timeLeft;
      if (timeLeft <= 0) {
          endQuiz();
      }
  }, 1000);
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;
  choicesElement.innerHTML = "";
  
  question.choices.forEach(function(choice) {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", checkAnswer);
      choicesElement.appendChild(button);
  });
}

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const question = questions[currentQuestionIndex];

  if (selectedAnswer === question.correctAnswer) {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          showQuestion();
      } else {
          endQuiz();
      }
  } else {
      timeLeft -= 10; // Subtracts time for an incorrect answer
  }
}

function endQuiz() {
  clearInterval(timer);
  quizScreen.style.display = "none";
  endScreen.style.display = "block";
  finalScoreElement.textContent = timeLeft;
}

function saveScore() {
  const initials = initialsElement.value;
  const score = timeLeft;

  if (initials) {
      const scores = JSON.parse(localStorage.getItem("scores")) || [];
      scores.push({ initials, score });
      localStorage.setItem("scores", JSON.stringify(scores));
      location.reload(); // Reload the page to play again
  }
}

startButton.addEventListener("click", startQuiz);
saveScoreButton.addEventListener("click", saveScore);

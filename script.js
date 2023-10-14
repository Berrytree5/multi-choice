const questions = [
  {
      question: "What is 5 + 2?",
      choices: ["7", "4", "5"],
      correct: "7",
  },
  {
      question: "Which animal locks their legs when asleep?",
      choices: ["Horses", "Cows", "Kangaroo"],
      correct: "Horses",
  },
  {
      question: "Which starter class uses a bow?",
      choices: ["Barbarian", "Archer", "Mage", "Fighter"],
      correct: "Archer",
  },
  
  {
      question: "What city is the capital of California?",
      choices:["Oakand", "Vallejo","San Francisco", "Sacramento"],
      correct: "Sacramento",

  }
  
  // Questions
];

const quizContainer = document.querySelector(".quiz-container");
const questionContainer = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const timeElement = document.getElementById("time");
const progressBar = document.getElementById("progress");
const progressBarWidth = progressBar.offsetWidth;

let currentQuestionIndex = 0;
let timeLeft = 60;

function startQuiz() {
  displayQuestion();
  const interval = setInterval(function () {
      timeLeft--;
      timeElement.textContent = timeLeft + " seconds";
      progressBar.style.width = (timeLeft / 60) * progressBarWidth + "px";

      if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
          clearInterval(interval);
          endQuiz();
      }
  }, 1000);
}

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
      questionContainer.textContent = questions[currentQuestionIndex].question;
      choicesContainer.innerHTML = "";

      questions[currentQuestionIndex].choices.forEach(function (choice) {
          const li = document.createElement("li");
          const button = document.createElement("button");
          button.textContent = choice;
          button.addEventListener("click", checkAnswer);
          li.appendChild(button);
          choicesContainer.appendChild(li);
      });
  } else {
      endQuiz();
  }
}

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const correctAnswer = questions[currentQuestionIndex].correct;

  if (selectedAnswer === correctAnswer) {
      //If Else Correct answer statements
      
  } else {
      
  }

  currentQuestionIndex++;
  displayQuestion();
}
// ...

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const correctAnswer = questions[currentQuestionIndex].correct;

  if (selectedAnswer === correctAnswer) {
      // Correct answer alert
      alert("Congratulations! Correct answer!");
  } else {
      // Incorrect answer alert
      alert("Incorrect answer. The correct answer is: " + correctAnswer);
  }

  currentQuestionIndex++;
  displayQuestion();
}

// ...


function endQuiz() {
  // Quiz end
  questionContainer.textContent = "Quiz Ended!";
  choicesContainer.innerHTML = "";
  timeElement.textContent = "Time's Up!";
}

startQuiz();

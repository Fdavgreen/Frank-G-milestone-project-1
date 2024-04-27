alert("Would you like to play the game?");
const questions = [
  {
    question: "What tag is used to define a paragraph in HTML?",
    answers: [
      { text: "< p >", correct: true },
      { text: "< div >", correct: false },
      { text: "< span >", correct: false },
      { text: "< h1 >", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    answers: [
      { text: "font-color", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "font-color", correct: false },
    ],
  },
  {
    question: "What keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "const", correct: false },
      { text: "all three", correct: true },
    ],
  },
  {
    question: "Which tag is used to create an unordered list in HTML?",
    answers: [
      { text: "< ol >", correct: false },
      { text: "< list >", correct: false },
      { text: "< ul >", correct: true },
      { text: "< li >", correct: false },
    ],
  },
  {
    question: "How do you add a background color to an element in CSS?",
    answers: [
      { text: "background-color", correct: true },
      { text: "bg-color", correct: false },
      { text: "color-background", correct: false },
      { text: "bg", correct: false },
    ],
  },
  {
    question: "What does DOM stand for in JavaScript?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Model", correct: false },
      { text: "Design Object Model", correct: false },
      { text: "Document Object Method", correct: false },
    ],
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    answers: [
      { text: "< link >", correct: false },
      { text: "< a >", correct: true },
      { text: "< href >", correct: false },
      { text: "< url >", correct: false },
    ],
  },
  {
    question:
      "Which property is used to change the font size of an element in CSS?",
    answers: [
      { text: "text-size", correct: false },
      { text: "font-size", correct: true },
      { text: "size", correct: false },
      { text: "text-font", correct: false },
    ],
  },
  {
    question: "What is the correct way to write an if statement in JavaScript?",
    answers: [
      { text: `if x = 5 {`, correct: false },
      { text: `if (x == 5) {`, correct: true },
      { text: `if x == 5 then {`, correct: false },
      { text: `if (x = 5) {`, correct: false },
    ],
  },
  {
    question: "Which tag is used to display an image in HTML?",
    answers: [
      { text: "< img >", correct: true },
      { text: "< image >", correct: false },
      { text: "< picture >", correct: false },
      { text: "< src >", correct: false },
    ],
  },
];

// get refs to html elements
const questionElement = document.getElementById("question"); //get much better with using .getElementbyId
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//variables to track currecnt index score
let currentQuestionIndex = 0;
let score = 0;

//function to start quiz, reset currrent index and score, set text of next button, display 1st question
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

//display question,reset the state, current question from question array, display Q num and text
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  //loop though each answer and create buttons, add correct attribute to button if answer is correct, eventlistener to handle answer selection
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

//function to reset the state
function resetState() {
  nextButton.style.display = "none"; // hide next button
  while (answerButtons.firstChild) {
    //remove answer buttons
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

//handle answer selection
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct"); //add class for correct answer
    score++;
  } else {
    selectedBtn.classList.add("incorrect"); // add class for incorrect answer
  }

  //disable all answer buttons and highlights the correct answer
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block"; //display next button
}
//function to show final score
function showScore() {
  resetState(); //reset state, display score
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again"; // change text of next button
  nextButton.style.display = "block"; // display next button
}

//to handle next button click
function handleNextButton() {
  currentQuestionIndex++; // move to next question
  if (currentQuestionIndex < questions.length) {
    // checks uf more questions remain
    showQuestion(); //display next question
  } else {
    showScore(); //show final score if all questions are answered
  }
}

//eventlistener for next button click
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    //check if more questions remain or if quiz is finsihed
    handleNextButton(); // handle next question
  } else {
    startQuiz(); // restart quiz
  }
});
startQuiz(); //start the quiz

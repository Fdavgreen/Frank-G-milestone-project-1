alert("Would you like to play the game?")
const questions = [
    {
        question: "What is the correct syntax to declare a variable in Javascript",
        answers: [
            {text: "w", correct: true},
            {text: "a", correct: false},
            {text: "s", correct: false},
            {text: "d", correct: false}
        ]
    },
    {
        question: "text for question",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false}
        ]
    },
    {
        question: "text for question",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false}
        ]
    },
    {
        question: "text for question",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false}
        ]
    },
    {
        question: "text for question",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false}
        ]
    },
    {
        question: "text for question",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false}
        ]
    },
    {
        question: "text for question",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false}
        ]
    },
    {
        question: "text for question",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false}
        ]
    },
    {
        question: "text for question",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false}
        ]
    },
    {
        question: "text for question",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; 
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
       button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer);
});
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
       answerButtons.removeChild(answerButtons.firstChild); 
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
    }else{
        selectedBtn.classList.add("incorrect");
    } 
   Array.from(answerButtons.children).forEach(button => { 
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }   
    button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore(){
    resetState(); 
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;  
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex <questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
});
startQuiz();
// const questions = [
//     {
//         question: "What is the correct syntax to declare a variable in Javascript",
//         answers: [
//             {text: "w", correct: true},
//             {text: "a", correct: false},
//             {text: "s", correct: false},
//             {text: "d", correct: false}
//         ]
//     },
//     // Additional questions...
// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     } else {
//         // Quiz ends, you can display the score or do something else
//         alert("Quiz ended! Your score is: " + score);
//         // You might want to reset the quiz or do something else here
//     }
// });

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1; 
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         button.addEventListener("click", () => {
//             selectAnswer(answer.correct);
//         });
//         answerButtons.appendChild(button);
//     });
// }

// function selectAnswer(isCorrect) {
//     if (isCorrect) {
//         score++;
//     }
//     nextButton.style.display = "block";
// }

// function resetState(){
//     nextButton.style.display = "none";
//     while(answerButtons.firstChild){
//        answerButtons.removeChild(answerButtons.firstChild); 
//     }
// }

// startQuiz();


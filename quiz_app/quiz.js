const questions = [
    {
        question: "What is full form of HTML?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Transfer Markup Language", correct: false },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyperlink Text Managing Language", correct: false },
        ]
    },
    {
        question: "What is full form of CSS?",
        answers: [
            { text: "Colorful Style System", correct: false },
            { text: "Computer Style Syntax", correct: false },
            { text: "Creative Style Sheets", correct: false },
            { text: "Cascading Style Sheet", correct: true },
        ]
    },
    {
        question: "What is full form of JS?",
        answers: [
            { text: "Java Source", correct: false },
            { text: "Java Source", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Java Syntax", correct: false },
        ]
    },
    {
        question: "What is HTML primarily used for?",
        answers: [
            { text: "Compressing web pages", correct: false },
            { text: "Creating the structure of a web page", correct: true },
            { text: "Styling a web page", correct: false },
            { text: "Managing a database", correct: false },
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answerBtn");
const nextButton = document.getElementById("nxt-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
  nextButton.innerHTML="Next"
    showQuestion();
    
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
          selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}
 

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
     }
 })

startQuiz();
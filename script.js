const questions = [
    {
        question: "which is greatest human on earth ever",
        answers:[
            {text:'Alexander',correct: false},
            {text:'Jessus',correct: false},
            {text:'Mohamed (scw)',correct: true},
            {text:'Mosses',correct: false},
        ]
    },
    {
        question: "which is the capital of Somalia",
        answers:[
            {text:'Hargaysa',correct: false},
            {text:'KIsmayo',correct: false},
            {text:'Baidio',correct: false},
            {text:'Mogadisho',correct: true},
        ]
    },
    {
        question: "when Somalia get indipendence",
        answers:[
            {text:'1960',correct: true},
            {text:'1970',correct: false},
            {text:'1964',correct: false},
            {text:'1977',correct: false},
        ]
    },
    {
        question: "Somali Youth League(SYL) consisted ___members",
        answers:[
            {text:'1o',correct: false},
            {text:'13',correct: true},
            {text:'16',correct: false},
            {text:'14',correct: false},
        ]
    }
]
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML =questionNo +'. '+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}
function resetState(){
    nextButton.style.display='none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect = selectBtn.dataset.correct ==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct =="true"){
            button.classList.add("correct")
        }
        button.disabled = true;
        nextButton.style.display = "block"
    })
}
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener('click',() =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
const questions = [
    {
        question: "Boqortooyadi Soomaaliyeed ee caan ka ku ahayd la ganacsiga Carabta iyo Hindiya waa:",
        answers:[
            {text:'Boqortooyadi Adal',correct: false},
            {text:'Boqortooyadi Ifat',correct: false},
            {text:'Boqortooyadi Ajuuraan',correct: true},
            {text:'Boqortooyadi Geledi',correct: false},
        ]
    },
    {
        question: "Ganacsiga Soomaalida xilligii hore wuxuu inta badan ku tiirsanaa:",
        answers:[
            {text:'Wabiyada',correct: false},
            {text:'Dhirta,Dhoofinta xoolaha iyo Dakadaha',correct: true},
            {text:'Dakadaha',correct: false},
            {text:'Dahabka',correct: false},
        ]
    },
    {
        question: "Ganacsatada Soomaaliyeed xilligii hore waxay dhoofin jireen:",
        answers:[
            {text:'Dahabka iyo Xawaajiga',correct: false},
            {text:'Qaxwada iyo Luubaanta',correct: true},
            {text:'Milixda iyo Dhoobada',correct: false},
            {text:'Dahabka iyo Biraha',correct: false},
        ]
    },
    {
        question: "Webiga ugu muhiimsan ee Soomaaliya oo beeraha taageera waa:",
        answers:[
            {text:'Wabiga Jubba',correct: false},
            {text:'Wabiga Shabeele',correct: true},
            {text:'Wabiga Niil',correct: false},
            {text:'Wabiga Amazon',correct: false},
        ]
    },
    {
        question: "Dagaalkii weyna Imam Axmed Gurey oo ku dilat taliyihi ciidanka bortaqiiska Vaska de Gauma:",
        answers:[
            {text:'Shimbra Kure 1529 milaadi',correct: false},
            {text:'jarte 16 April 1542 milaadi',correct: false},
            {text:'Wayne dage 1542 milaadi',correct: false},
            {text:'Wolfa 28 August 1542 milaadi',correct: true},
        ]
    },
    {
        question: "Taariikhyahanki caanka ahay Ibnu Batuta waxa xeebaha somalia so booqde qarnigii:",
        answers:[
            {text:'13aad miilaadi',correct: true},
            {text:'15aad miilaadi',correct: false},
            {text:'16aad miilaadi',correct: false},
            {text:'10aad miilaadi',correct: false},
        ]
    },
    {
        question: "Boqortooyadi Ajuuran waxay talineyse muda dhan:",
        answers:[
            {text:'600 sano',correct: false},
            {text:'300 sano',correct: false},
            {text:'400 sano',correct: true},
            {text:'150 sano',correct: false},
        ]
    },
    {
        question: "Dhirirka xeebta Somalia waa:",
        answers:[
            {text:'4000km2',correct: false},
            {text:'3000km2',correct: false},
            {text:'2500km2',correct: false},
            {text:'3333km2',correct: true},
        ]
    },
    {
        question: "Bulshada Soomaaliyeed waxay muhiimad weyn siisaa:",
        answers:[
            {text:'Dagaalka',correct: false},
            {text:'Marti soorka iyo ixtiramka martida',correct: true},
            {text:'Hantida badan',correct: false},
            {text:'Kalinimada',correct: false},
        ]
    },
    {
        question: "Soomaaliya inta badan cimiladeedu waa:",
        answers:[
            {text:'Kuleel daran',correct: false},
            {text:'Qabow daran',correct: false},
            {text:'kuleel iyo qabow isku jira',correct: true},
            {text:'Baraf badan',correct: false},
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
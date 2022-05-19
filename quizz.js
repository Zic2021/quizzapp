const quizzData = [
    {
        question: '1+1',
        a: '3',
        b: '4',
        c: '2',
        d: '10',
        correct: 'c'
    },
    {
        question: '1+2',
        a: '3',
        b: '4',
        c: '2',
        d: '10',
        correct: 'a'
    },
    {
        question: '2+2',
        a: '3',
        b: '4',
        c: '2',
        d: '10',
        correct: 'b'
    },
    {
        question: '1+9',
        a: '3',
        b: '4',
        c: '2',
        d: '10',
        correct: 'd'
    },
    {
        question: '1+5',
        a: '3',
        b: '6',
        c: '2',
        d: '10',
        correct: 'b'
    }
]
let currentQuizz = 0
let answer
let score = 0
let currentQuestion
let questions = document.getElementById('question')
let answers = document.querySelectorAll('.answer')
let nextBtn = document.getElementById("next")
let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')
let getScore = document.getElementById("score")
getScore.innerText = score
loadquizz()
function loadquizz(){
    unselect()
    currentQuestion = quizzData[currentQuizz]
    questions.innerText = currentQuestion.question
    a_text.innerText = currentQuestion.a
    b_text.innerText = currentQuestion.b
    c_text.innerText = currentQuestion.c
    d_text.innerText = currentQuestion.d
}
function unselect(){
    answers.forEach(el => el.checked = false)
}
nextBtn.addEventListener("click", ()=>{
    // check which radio button is clicked
    answers.forEach(el =>{
        if(el.checked){
            answer = el.id
            return answer
        }
    })
    // only go through when an answer is checked
    if(answer){
        // check if answer equall the correct answer
        if(answer === currentQuestion.correct){
            score++
        }
        getScore.innerText = score
        currentQuizz++
        loadquizz()
    }
})
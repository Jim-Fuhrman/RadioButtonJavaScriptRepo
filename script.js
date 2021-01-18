const questions = document.querySelectorAll(".questions")
const rightAnswers = ["c", "b", "a", "e", "b"]
// alert(rightAnswers.length)
let usersAnswers = []
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let isAnswered = false
let currentActive = 0;
nextQuestion()
if(currentActive > 0) {
    hideQuestion()
}

//"Next" button's listener is coded next.
next.addEventListener('click', () => {
    currentActive++
   
    if(currentActive > questions.length - 1) {
        displayAnswers()
        currentActive = questions.length - 1
    }

    currentFieldName = "q" + [currentActive+1]
    currentFieldValues = document.getElementsByName(currentFieldName)  

    if(!isAnswered) {    
        alert("Please make a selection before clicking \"Next\"")
        currentActive--
        return ""
    }    
    nextQuestion()    
})

//"Prev" button's listener is coded next.
prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 0
    }
    prevQuestion()
})

function nextQuestion() {
    checkRadioButtons()
    questions[currentActive].classList.add('show')
    if(currentActive > 0) {
        questions[currentActive-1].classList.add('hide')
        questions[currentActive-1].classList.remove('show')
    }
}

function prevQuestion() {
    questions[currentActive].classList.add('show')
    if(currentActive > 0 && currentActive < questions.length)
        questions[currentActive+1].classList.add('hide')
        questions[currentActive+1].classList.remove('show')
}

function checkRadioButtons() {
    let currentFieldName = "q" + [currentActive+1]
    let currentFieldValues = document.getElementsByName(currentFieldName)

    for(let x = 0; x < currentFieldValues.length; x++) {
        
        isAnswered = false  
    
        let rdoBtnId = currentFieldName + [x+1]
        let rdoBtnNmbr = x+1
        let w = document.getElementById(rdoBtnId)
       // alert("user's answer = " + usersAnswers[x])
        if(usersAnswers[x] !== undefined) {
             isAnswered = true
        }
        w.addEventListener('click', () => {
            isAnswered = true
            x = currentFieldValues.length + 1
            let answer = updateAnswer(rdoBtnNmbr)
            usersAnswers.push(answer)
        }) 
    }
}

function displayAnswers() {
     alert("See the console log to compare your answers with the right answers")
     let ctr = 0
     rightAnswers.forEach(rightAnswer => {
        ctr++
        console.log("rightanswer #" +  ctr + " = " + rightAnswer)        
     })
     console.log('')
     ctr = 0
     usersAnswers.forEach(userAnswer => {
        ctr++
        console.log("userAnswer #" +  ctr + " = " + userAnswer)
     })
}

function updateAnswer(rdoBtnNmbr) {
    switch(rdoBtnNmbr) {
        case 1:
            return "a"
            break
        case 2:
            return "b"
            break
        case 3:
            return "c"
            break
        case 4:
            return "d"
            break
        case 5:
            return "e"
            break
    }
}
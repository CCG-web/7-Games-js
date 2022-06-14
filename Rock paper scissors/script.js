const computerChoiceDisplay = document.getElementById('computer-choice')
const UserChoicesDisplay = document.getElementById('computer-user')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerchoice
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
   
    userChoice = e.target.id
    UserChoicesDisplay.innerHTML = userChoice
    generateComputerChoice()
    compare()

}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
   if(randomNumber === 1){
       computerchoice = "rock"
   }
   if(randomNumber === 2){
       computerchoice = "scissors"
   }
   
   if(randomNumber === 3){
       computerchoice = "paper"
   }
   computerChoiceDisplay.innerHTML=computerchoice
}


function compare(){
    if(userChoice === computerchoice){
        resultDisplay.innerHTML ="empate"
    }
    if(userChoice=="rock" && computerchoice=="scissors"){
       resultDisplay.innerHTML="usuario ganhou"
    }
    
    if(userChoice=="scissors" && computerchoice=="rock"){
       resultDisplay.innerHTML="computador ganhou"
    }
    if(userChoice=="rock" && computerchoice=="paper"){
        resultDisplay.innerHTML="computador ganhou"
     }
     if(userChoice=="scissors" && computerchoice=="paper"){
        resultDisplay.innerHTML="computador ganhou"
     }
     if(userChoice=="paper" && computerchoice=="rock"){
        resultDisplay.innerHTML="computador ganhou"
     }

     if(userChoice=="paper" && computerchoice=="scissors"){
        resultDisplay.innerHTML="computador ganhou"
     }

     if(userChoice=="paper" && computerchoice=="rock"){
        resultDisplay.innerHTML="usuario ganhou"
     }


}
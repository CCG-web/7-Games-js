const squares = document.querySelectorAll(".square")
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#timeLeft')
const score = document.getElementById('score')


let result = 0
let hitPosition
let r
let count = 10
let time = 10
function numeroRandomico() {


    return Math.floor(Math.random() * 9)

}

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    r = numeroRandomico()

    let randomPosition = squares[r]

    randomPosition.classList.add('mole')
    hitPosition = randomSquare.id
    count--
    if(count<0){
        count = 10
        
    }
    timeLeft.textContent = count
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {

        r++


        if (square.id == r) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}


setInterval(() => {
    alert('game over you score is ' + result)
    timeLeft.textContent = time
    if(time <0){
        time = 10
    }
}, 10000);


moveMole()
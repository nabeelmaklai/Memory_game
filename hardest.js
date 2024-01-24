// Declare the arrays to be used

let pattern = []
let playerPattern = []
let board = document.querySelectorAll('.box')
let scoreDisplay = document.querySelector('.score')
let reset = document.querySelector('.reset')
let score = 0
let counter = 10

// Have JS generate random numbers from 1 to 5

const generateRandom = () => {
  let num = Math.floor(Math.random() * 6)
  pattern.push(num)
  // console.log(pattern)
}

// Add a function to light up parts of the board

const blink = () => {
  setTimeout(() => {
    for (let i = 0; i < pattern.length; i++) {
      setTimeout(() => {
        document.querySelectorAll('.box')[pattern[i]].classList.add('black')
        setTimeout(() => {
          if (
            document
              .querySelectorAll('.box')
              [pattern[i]].classList.contains('black')
          ) {
            document
              .querySelectorAll('.box')
              [pattern[i]].classList.remove('black')
          }
        }, 500)
      }, i * 1500)
    }
  }, 500)
}
const resetBtn = () => {
  setTimeout(() => {
    score = 0
    pattern.length = 0
    playerPattern.length = 0
    generateRandom()
    blink()
    playerSelect()
    scoreDisplay.innerHTML = 'Score: ' + 0
    rmClass()
    // console.log('Generated pattern is: ' + pattern)
    // console.log('player patter is: ' + playerPattern)
  }, 1000)
}

// reset.addEventListener('click', () => {
//   location.reload()
// })

reset.addEventListener('click', resetBtn)

// Have the player select one of the squares

const rmClass = () => {
  for (let i = 0; i < board.length; i++) {
    if (document.querySelectorAll('.box')[i].classList.contains('black')) {
      document.querySelectorAll('.box')[i].classList.remove('black')
    }
  }
}
const timer = setInterval(function () {
  // console.log(counter)
  counter--
  if (counter === -2) {
    // console.log('timer')
    clearInterval(timer)
    // alert(
    //   `Wrong pattern, Game Over. Your score  was ${score}, The game will now restart`
    // )
  }
}, 1000)

const playerSelect = () => {
  let playerMove = 0
  let move = pattern.length
  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', () => {
      if (playerMove < move) {
        board[i].classList.add('black')
        playerPattern.push(i)
        playerMove = playerMove + 1
        // console.log('player patter is: ' + playerPattern)
        // console.log(playerPattern)
        setTimeout(() => {
          rmClass()
        }, 350)
        if (playerMove === move) {
          if (JSON.stringify(playerPattern) != JSON.stringify(pattern)) {
            alert(
              `Wrong pattern, Game Over. Your score  was ${score}, The game will now restart`
            )
            location.reload()
          } else {
            setTimeout(() => {
              playerPattern = []
              score += 10
              scoreDisplay.innerHTML = 'Score: ' + score
              generateRandom()
              blink()
              playerSelect()
              clearInterval(timer)
            }, 1000)
          }
        }
      }
    })
  }
}

generateRandom()
blink()
playerSelect()

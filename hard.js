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
        }, 250)
      }, i * 1000)
    }
  }, 250)
}

reset.addEventListener('click', () => {
  location.reload()
})

// Have the player select one of the squares

const rmClass = () => {
  for (let i = 0; i < board.length; i++) {
    if (document.querySelectorAll('.box')[i].classList.contains('black')) {
      document.querySelectorAll('.box')[i].classList.remove('black')
    }
  }
}

const playerSelect = () => {
  let move = pattern.length
  let playerMove = 0
  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', () => {
      if (playerMove < move) {
        board[i].classList.add('black')
        playerPattern.push(i)
        playerMove = playerMove + 1
        setTimeout(() => {
          rmClass()
        }, 350)
        if (playerMove === move) {
          if (JSON.stringify(playerPattern) != JSON.stringify(pattern)) {
            // location.reload()
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

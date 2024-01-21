// Declare the arrays to be used

let pattern = []
let playerPattern = []
let board = document.querySelectorAll('.box')
let checkButton = document.querySelector('.check')
let nextPattern = document.querySelector('.next')
let score = 0
let wrongMove = 0
let eachClick = 0

// Have JS generate random numbers from 1 to 5

const generateRandom = () => {
  let num = Math.floor(Math.random() * 6)
  pattern.push(num)
  console.log(pattern)
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

checkButton.addEventListener('click', () => {
  if (eachClick < 1) {
    if (JSON.stringify(playerPattern) != JSON.stringify(pattern)) {
      console.log('wrong pattern')
      playerPattern = []
      console.log(playerPattern)
      eachClick++
    } else {
      score += 10
      console.log(score)
      eachClick++
    }
  }
})
nextPattern.addEventListener('click', () => {
  eachClick = 0
  playerPattern = []
  generateRandom()
  blink()
  playerSelect()
})

// Stack overflow https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop

// Have the player select one of the squares

// const checkPattern = () => {
//   if (playerPattern !== pattern) {
//     wrongMove = wrongMove + 1
//   } else {
//     generateRandom()
//     blink()
//     playerSelect()
//     console.log(pattern)
//   }
// }

const rmClass = () => {
  for (let i = 0; i < board.length; i++) {
    if (document.querySelectorAll('.box')[i].classList.contains('black')) {
      document.querySelectorAll('.box')[i].classList.remove('black')
    }
  }
}

// const playGame = () => {
//   if (wrongMove < 3) {
//     generateRandom()
//     blink()
//     playerSelect()
//   }
// }

const playerSelect = () => {
  let move = pattern.length
  let j = 0
  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', () => {
      if (j < move) {
        board[i].classList.add('black')
        playerPattern.push(parseInt(board[i].innerHTML) - 1)
        j = j + 1
        console.log(playerPattern)
        setTimeout(() => {
          rmClass()
        }, 350)
      }
      //  else if (j === move) {
      //   for (let i = 0; i < board.length; i++) {
      //     if (playerPattern[i] != pattern[i]) {
      //       console.log('it worked')
      //     }
      //   }
      // }

      // if (j === move) {
      //   playerPattern = []
      //   console.log(pattern)
      //   console.log(playerPattern)

      //   generateRandom()
      //   blink()
      //   playerSelect()
      //   console.log(playerPattern)
      // }
      // checkPattern()
    })
  }
}

generateRandom()
generateRandom()

blink()
playerSelect()
// checkPattern()

// const checkPattern = () => {
//   for (let i = 0; i < board.length; i++) {
//     if (playerPattern[i] != pattern[i]) {
//       return true
//     } else {
//       return false
//       console.log('now thats good')
//     }
//   }
// }

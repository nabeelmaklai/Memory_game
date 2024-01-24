// Declare the arrays to be used

let pattern = []
let playerPattern = []
let board = document.querySelectorAll('.box')
let scoreDisplay = document.querySelector('.score')
let reset = document.querySelector('.reset')
let score = 0
let wrongMove = 0
let eachClick = 0
let currentLevel = 1
let previousLevel = 0
let counter = 10

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
  let j = 0
  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', () => {
      if (j < move) {
        board[i].classList.add('black')
        playerPattern.push(i)
        j = j + 1
        console.log(playerPattern)
        setTimeout(() => {
          rmClass()
        }, 350)
        if (j === move) {
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
// stopCounter()
// const playerSelectTimer = () => {
//   if (counter === 0) {
//     alert(
//       `Wrong pattern, Game Over. Your score  was ${score}, The game will now restart`
//     )
//     location.reload()
//   }
//   let move = pattern.length
//   let j = 0
//   for (let i = 0; i < board.length; i++) {
//     board[i].addEventListener('click', () => {
//       if (j < move) {
//         board[i].classList.add('black')
//         playerPattern.push(i)
//         j = j + 1
//         setTimeout(() => {
//           rmClass()
//         }, 350)
//       }
//       if (j === move) {
//         if (JSON.stringify(playerPattern) != JSON.stringify(pattern)) {
//           alert(
//             `Wrong pattern, Game Over. Your score  was ${score}, The game will now restart`
//           )
//           location.reload()
//         } else {
//           setTimeout(() => {
//             playerPattern = []
//             score += 10
//             scoreDisplay.innerHTML = 'Score: ' + score
//             generateRandom()
//             blink()
//             playerSelectTimer()
//           }, 1000)
//         }
//       }
//     })
//   }
// }
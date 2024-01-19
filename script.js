// Declare the arrays to be used

let pattern = []
let playerPattern = []
let board = document.querySelectorAll('.box')

// Have JS generate random numbers from 1 to 6

const generateRandom = () => {
  let len = pattern.length
  let num = Math.floor(Math.random() * len + 1)
  pattern.push(num)
}

// Add a function to light up parts of the board

const attBlink = () => {
  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', () => {
      document.querySelectorAll('.box')[i].classList.toggle('black')
    })
  }
}

generateRandom()
generateRandom()
generateRandom()
generateRandom()

const addClass = () => {
  for (let i = 0; i < board.length; i++) {
    document.querySelectorAll('.box')[i].classList.add('black')
  }
}

const blink = () => {
  for (let i = 0; i < pattern.length; i++) {
    setTimeout(function timer() {
      document.querySelectorAll('.box')[pattern[i]].classList.remove('black')
      setTimeout(() => {
        if (board[i].classList.contains('black')) {
          board[i].classList.remove('black')
        }
      }, 1500)
    }, i * 2000)
  }
}

// Stack overflow https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop

// Have the player select one of the squares

const selector = () => {
  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', () => {
      //board[i].innerHTML = 'X'
      playerPattern.push(board[i].innerHTML - 1)
      console.log(playerPattern)
    })
  }
}

addClass()

// const setInt = () => {
//   // x = pattern.length
//   for (let i = 0; i < pattern.length; i++) {
//     setInterval(blink, 2000)
//   }
// }

// let i = 0

// const itteration = () => {
//   if (i < 4) {
//     console.log(i)
//     blink()
//     i++
//     setTimeout(() => {
//       blink()
//       itteration()
//     }, 3000)
//   }
// }
// itteration()
//setInt()
// blink()

// console.log(pattern)
// document.querySelectorAll('.box')[3].classList.toggle('black')

// Have the function increment the score for each correct pattern match

// const changeClass = () => {
//   document.querySelectorAll('.box')[1].classList.toggle('black')
//document.body.classList.toggle('grey')
//}
// const blink = () => {
//   for (let i = 0; i < board.length; i++) {
//     board[i].addEventListener('click', changeClass)
//   }
// }

// const blink = () => {
//   board.forEach((num, i) => {
//     num.addEventListener('click', () => {
//       document.querySelectorAll('.box')[i].classList.toggle('black')
//     })
//   })
// }

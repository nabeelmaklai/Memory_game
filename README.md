# Memory_game

# Vanilla_JS_Memory_Test \_Game

> This game will test a player's recall skills.

## Game development

> The game was developed using vanilla JavaScript, and no API was used.

## Link:

The gaem is deployed on surge and can be reached by the following [link](https://galactic-code.surge.sh/)

## How to play the game

> The way to play the game is to match the prompts generated by the code. As soon as the game starts, one of the squares on the board will flash, and the player is required to match the order in which the square flashes. Each correct cycle of guesses is awarded a point. The game grows in complexity as it progresses. Each player is allowed three incorrect moves before the game terminates.

## How the game was coded (Code explained)

> The code was written in vanilla JavaScript(JS). The board was built using 6 divs tags in html. Event listeners were then utilized which were attached to each div using a for loop. The functionality was rendered playable using arrays. The step by step explanation of how the code works is:

- As soon as the page is loaded, 2 arrays empty arrays are initialized and a function that generates a random number between 1 and 6 is then pushed into the pattern array

- Another function that adds the an event listener to each square of the game adds and then removes the class using a setTimeOut function creating the blink or flash seen

- Another function, which is the main game function then allows the player to attempt to match the pattern generated, each click stores the index number that is associated with teh clicked squre in an array.

- Once the player attempts to match the array, and the length of the generated and the player array is similar, the array is parsed into a string and compared. If both the arrays are equal elements in the same index, the player array is cleared, another random number generated and the score incremented by 10. If the arrays are not the same the code displays an alert with the score and the game is then restarted.

## :computer: Technologies Used

- ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## Future work

Some additional functionality that I might add are

- Have a timer included in the hardest mode
- Reset the game without reloading the page
- Have a landing page that will allow the player to select the level
- Have a storage function that would store the higeste score on each level

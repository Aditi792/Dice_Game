



let randomNumberPlayer1 = Math.floor(Math.random()*6)+1;
let Player1DiceImage = "image/dice"+ randomNumberPlayer1 +".png";
document.querySelectorAll("img")[0].setAttribute("src", Player1DiceImage);

let randomNumberPlayer2 = Math.floor(Math.random()*6)+1;
let Player2DiceImage = "image/dice"+ randomNumberPlayer2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", Player2DiceImage);


if (randomNumberPlayer1 > randomNumberPlayer2) {
    document.querySelector("h1").innerHTML = "🚩Play 1 Wins!";
  }
else if (randomNumberPlayer2 > randomNumberPlayer1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  }
else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
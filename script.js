var randomNumber1 = Math.floor(Math.random() * 6);
randomNumber1 = randomNumber1 + 1;
// console.log(randomNumber1);
document
  .querySelector(".img1")
  .setAttribute("src", `./images/dice${randomNumber1}.png`);

var randomNumber2 = Math.floor(Math.random() * 6);
randomNumber2 = randomNumber2 + 1;
// console.log(randomNumber2);
document
  .querySelector(".img2")
  .setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 === randomNumber2) {
  document.querySelector(".container h1").innerHTML = `Draw <br/> 🤝`;

  // setAttribute("h1", );
} else if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML =
    "🚩 Player 1 Wins! <br/> 🥇 ";
  // setAttribute("h1", );
} else {
  document.querySelector(".container h1").innerHTML =
    "Player 2 Wins! 🚩 <br/> 🥇";
  // setAttribute("h1", );
}

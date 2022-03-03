// DOM Elements
let coin = document.querySelector(".coin");
let score = document.getElementById("scores");
let flipButton = document.querySelector("#flip-button");
let resetButton = document.getElementById("reset-button");
let headsCount = document.getElementById("heads-count");
let tailsCount = document.getElementById("tails-count");
// Initialize counts for our coin flip tally
let heads = 0;
let tails = 0;

// Click event listener for our flip button 
flipButton.addEventListener("click", () => {
  // Assign random number between 0 and 1 to a variable
  let side = Math.random();
  // In line stylee setting animation to "none"
  coin.style.animation = "none";
  // console logging the result of the flip
  console.log(side);
  // if the random number is greater than .5 we're in this if statement
  if (side >= 0.5) {
    //starting the heads flip animation after a delay
    setTimeout(function () {
      coin.style.animation = "flip-heads 3s forwards";
    }, 100);
    //incrementing the heads count by 1
    heads++;
    // if the random number is less than .5 we're in this if statement
  } else {
    //starting the tails flip animation after a delay
    setTimeout(function () {
      coin.style.animation = "flip-tails 3s forwards";
    }, 100);
    //incrementing the tails count by 1
    tails++;
  }
  // 
  flipButton.disabled = true;
  setTimeout(function () {
    headsCount.textContent = `Heads: ${heads}`;
    tailsCount.textContent = `Tails: ${tails}`;
  }, 3000);
  setTimeout(function () {
    flipButton.disabled = false;
  }, 3000);
});

resetButton.addEventListener("click", () => {
  heads = 0;
  tails = 0;
  headsCount.textContent = `Heads: ${heads}`;
  tailsCount.textContent = `Tails: ${tails}`;
  flipButton.disabled = false;
  coin.style.animation = "none";
});

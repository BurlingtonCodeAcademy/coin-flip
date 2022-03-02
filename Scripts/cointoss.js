let coin = document.querySelector(".coin");
let score = document.getElementById("scores");
let flipButton = document.querySelector("#flip-button");
let resetButton = document.getElementById("reset-button");
let headsCount = document.getElementById("heads-count");
let tailsCount = document.getElementById("tails-count");
let heads = 0;
let tails = 0;

flipButton.addEventListener("click", () => {
  let side = Math.random();
  coin.style.animation = "none";
  console.log(side);
  if (side >= 0.5) {
    setTimeout(function () {
      coin.style.animation = "flip-heads 3s forwards";
    }, 100);
    heads++;
  } else {
    setTimeout(function () {
      coin.style.animation = "flip-tails 3s forwards";
    }, 100);
    tails++;
  }
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

const allCubes = document.querySelectorAll(".cubes");
const resetBtn = document.querySelector("#reset-btn");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");

let state = true;

//Array of winpatterns
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

allCubes.forEach((cube) => {
  cube.addEventListener("click", () => {
    if (state) {
      cube.innerText = "X"; //PlayerX's turn
      state = false;
    } else {
      cube.innerText = "O"; // PlayerO's turn
      state = true;
    }
    cube.disabled = true;

    checkWinner();
  });
});

const showWinner = function (winner) {
  msg.innerText = `Congratulations, the winner is ${winner}`;
  msgContainer.classList.remove("hidden");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    const posVal1 = allCubes[pattern[0]].innerText;
    const posVal2 = allCubes[pattern[1]].innerText;
    const posVal3 = allCubes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        console.log(`winner`);

        for (let i = 0; i < pattern.length; i++) {
          allCubes[pattern[i]].classList.add("winner-styles");
        }

        allCubes.forEach((cube) => (cube.disabled = true));

        showWinner(posVal1);
      }
    }
  }
};

resetBtn.addEventListener("click", function () {
  allCubes.forEach((cube) => {
    cube.disabled = false;
    cube.innerText = "";
    cube.classList.remove("winner-styles");
  });
  state = true;
  msgContainer.classList.add("hidden");
});

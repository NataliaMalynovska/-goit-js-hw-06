const inputBtn = document.querySelector(".change-color");
const colorBackground = document.querySelector(".color");
const colorBody = document.querySelector("body");

inputBtn.addEventListener("click", (event) => {
  colorBackground.textContent = colorBody.style.backgroundColor = getRandomHexColor();
  // console.log(colorBackground.textContent)
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
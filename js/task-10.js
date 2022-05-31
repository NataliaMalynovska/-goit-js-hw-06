function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  select: document.querySelector("input"),
  createBoxes: document.querySelector('button[data-create]'),
  destroyBoxes: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector("#boxes"),
}

refs.createBoxes.addEventListener("click", onClickBtnCreateBoxes);
function onClickBtnCreateBoxes() {
  const currentValue = refs.select.value;
  createBoxes(currentValue)
}

refs.createBoxes.addEventListener("click", createBoxes);

function createBoxes(amount) {
  const boxes = []
  let sizes = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = sizes  + "px";
    box.style.height = sizes  + "px";
    box.style.backgroundColor = getRandomHexColor()
    console.log(box)
    boxes.push(box);
    sizes += 10;
    console.log(sizes);
    refs.divBoxes.append(...boxes);
    console.log(refs.divBoxes)
  }
}

refs.destroyBoxes.addEventListener("click", (event) => {
  refs.divBoxes.innerHTML = "";
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  select: document.querySelector("input"),
  createBoxes: document.querySelector('button[data-create]'),
  destroyBoxes: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector("#boxes"),
}
// Таким шляхом взагалі нічого не виводить
// const amount = refs.select.value;
// console.log(amount)

// Таким шляхом отримую amount як число, але createBoxes його не бачить як число
refs.select.addEventListener("input", (event) => {
  const amount = event.currentTarget.value;
  console.log(amount);
})

//  Создание 
refs.createBoxes.addEventListener("click", createBoxes);
 
function createBoxes(amount) {

  const boxes = []
  let sizes = 30;
  // поставила 3, щоб було видно, що функція працює
  for (let i = 0; i < 3; i += 1) {
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
// Удаление
refs.destroyBoxes.addEventListener("click", (event) => {
  refs.divBoxes.innerHTML = "";
})

// Допоможіть знайти помилку, чому createBoxes не приймає amount?

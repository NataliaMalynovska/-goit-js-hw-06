const refs = {
  counterValue: document.querySelector('#value'),
};
  
let counterValue = 0;
const btns = document.querySelectorAll("button");
btns.forEach((btn) => { 
btn.addEventListener("click", () => {
        if (btn.dataset.action === "decrement") { counterValue -= 1; }
        else { counterValue += 1; }
        
        console.log(counterValue);
    refs.counterValue.textContent = counterValue;})
})



// const refs = {
//   counterValue: document.querySelector('#value'),
//   incrementButton: document.querySelector('[data-action="increment"]'),
//   decrementButton: document.querySelector('[data-action="decrement"]'),
// };

// let counterValue = 0;
// refs.incrementButton.addEventListener('click', () => {
//   counterValue += 1;
//   refs.counterValue.textContent = counterValue;
// });

// refs.decrementButton.addEventListener('click', () => {
//   counterValue -= 1;
//   refs.counterValue.textContent = counterValue;
// });

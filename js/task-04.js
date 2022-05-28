let counterValue = document.querySelector("span");
counterValue = 0;
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.dataset.action === "decrement") { counterValue -= 1; }
        else { counterValue += 1; }
        
        console.log(counterValue);
    
    })
})
// counterValue = String(counterValue);
// console.log(counterValue);
counterValue.textContent = "counterValue";



const refs = {
    input: document.querySelector("#validation-input "),
}

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    const length = event.currentTarget.dataset.length
    const input = event.currentTarget.value.length
        // console.log(length) 
        // console.log(input ) 
    
    if (input == length) {
        refs.input.classList.add("valid");
    } else (
        refs.input.classList.add("invalid")
    )  
};

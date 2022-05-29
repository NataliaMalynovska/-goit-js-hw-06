const refs = {
    input: document.querySelector("input"),
    messaage: document.querySelector("#name-output")
}

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
    refs.messaage.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
  

};

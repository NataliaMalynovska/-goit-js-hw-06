const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
const text = item.querySelector("h2");
    console.log(`Category: ${text.textContent}`)
    const listEl = item.querySelectorAll("li");
    console.log(`Elements: ${listEl.length}`);
});


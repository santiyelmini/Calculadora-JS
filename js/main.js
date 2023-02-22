
const display = document.querySelector(".calculator-display")
const button = document.querySelectorAll(".button")
const backspace = document.querySelector("#backspace")
const clear = document.querySelector("#clear")
const calculate = document.querySelector("#calculate")

clear.addEventListener("click", () => {
    display.textContent = ""
    if(display.textContent === "") {
        display.textContent = "0";
    }
});

backspace.addEventListener("click", () => {
    if (display.textContent === "Error!") {
        display.textContent = "0";
    }else {
        display.textContent = display.textContent.slice(0, -1);
        if (display.textContent === "") {
            display.textContent = "0";
        }
    }
});

button.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(display.textContent === "0" || display.textContent === "Error!") {
            display.textContent = btn.textContent;
        }else {
            display.textContent += btn.textContent;
        }
    })
})

calculate.addEventListener("click", () => {
    try {
        display.textContent = eval(display.textContent)
    } catch {
        display.textContent = "Error!"
    }
})
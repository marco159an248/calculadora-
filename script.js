const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("number")) {
            display.value += button.textContent;
        } else if (button.classList.contains("operator")) {
            display.value += button.textContent;
        } else if (button.classList.contains("clear")) {
            display.value = "";
        } else if (button.classList.contains("backspace")) {
            display.value = display.value.slice(0, -1);
        } else if (button.classList.contains("equal")) {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Erro";
            }
        } else if (button.classList.contains("special")) {
            if (button.textContent === "%") {
                display.value += "/100";
            } else {
                display.value += button.textContent;
            }
        }
    });
});

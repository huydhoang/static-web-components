const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".keys");
const display = document.querySelector(".display");

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    // determine whether key is a number key
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNbr = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    // Remove .is-keydown class from all keys
    Array.from(key.parentNode.children).forEach(k =>
      k.classList.remove("is-keydown")
    );

    if (!action) {
      console.log("number key!");
      if (
        displayedNbr === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = keyContent;
        calculator.dataset.previousKeyType = "";
      } else {
        display.textContent = displayedNbr + keyContent;
      }
    }
    if (["add", "subtract", "multiply", "divide"].includes(action)) {
      console.log(action + "!");
      key.classList.add("is-keydown");
      // Add custom attribute
      calculator.dataset.previousKeyType = "operator";
      //
      calculator.dataset.firstValue = displayedNbr;
      calculator.dataset.operator = action;
    }
    if (action === "decimal") {
      console.log("decimal key!");
      // Only add a dot if string hasn't had one
      if (!displayedNbr.includes(".")) {
        display.textContent = displayedNbr + ".";
      }
    }
    if (action === "clear") {
      console.log("AC key!");
      display.textContent = "0";
      calculator.dataset.firstValue = 1;
      // Add custom attribute
      calculator.dataset.previousKeyType = "clear";
    }
    if (action === "calculate") {
      console.log("equal key!");
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNbr;

      if (firstValue && operator) {
        console.log("calculated!");
        display.textContent = calculate(firstValue, operator, secondValue);
        calculator.dataset.firstValue = 1;
      } else {
        // display.textContent;
      }
      // Add custom attribute
      calculator.dataset.previousKeyType = "calculate";
    }
  }
});

const calculate = (n1, operator, n2) => {
  let result = "";

  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result;
};

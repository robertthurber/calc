// function for adding number
function addNum(num1, num2) {
  let addNumber = num1 + num2;
  return addNumber;
}

// function for subtracting numbers
function subtractingNum(num1, num2) {
  let subNumber = num1 - num2;
  return subNumber;
}

//function for multiplying number
function multiplyingNum(num1, num2) {
  let multiplyNum = num1 * num2;
  return multiplyNum;
}

//function for dividing numbers
function dividingNum(num1, num2) {
  let divNum = parseFloat(num1) / parseFloat(num2);
  return divNum;
}

// variables for each option a user can do on the calculator
let userNum1 = 0;
let userNum2 = 0;
let operator = "";

function operate(userNum1, userNum2, operator) {
  if (operator == "+") {
    return addNum(userNum1, userNum2);
  } else if (operator == "-") {
    return subtractingNum(userNum1, userNum2);
  } else if (operator == "*") {
    return multiplyingNum(userNum1, userNum2);
  } else if (operator == "/") {
    return dividingNum(userNum1, userNum2);
  }
}
//here we are getting all button and adding the button press function when
// any button is pressed
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", buttonPressed);
});
//function grabs the inner text of the button pressed
function buttonPressed(e) {
  const buttonPress = e.target;
  value = buttonPress.innerText;
  console.log(value);
}
//still need to figure out how to just get the value added to the display
let span = document.createElement("span");
let output = document.querySelector(".output");
span.textContent = buttonPressed();

output.appendChild(span);

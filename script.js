const allNumButtons = document.getElementsByClassName("number");
const allOperatorButtons = document.getElementsByClassName("operator");
const equalButton = document.querySelector(".equals");
const display = document.querySelector(".display");

for (i=0 ; i<allNumButtons.length ; i++){
    allNumButtons[i].addEventListener("click", setValues);
}
for (i=0 ; i<allOperatorButtons.length ; i++){
    allOperatorButtons[i].addEventListener("click", setOperator);
}

equalButton.addEventListener("click", execute);

let valueOne = "";
let valueTwo = "";
let savedValue = false;
let operatorSelection = "";
let displayResult = 0;
let equalJustPressed = false;

function convertValue(text){
    return parseFloat(text);
}

function setValues(){
    if (equalJustPressed){
        valueOne = "";
        valueTwo = "";
        savedValue = false;
        equalJustPressed = false;
    }

    if (!savedValue){
    valueOne += (this.textContent);
    updateDisplay(valueOne);
    console.log(`Value one: ${valueOne}`);
    } else {
        valueTwo += (this.textContent);
        updateDisplay(valueTwo);
        console.log(`Value two: ${valueTwo}`);
    }
}

function setOperator(){
    if (equalJustPressed){
        valueTwo = "";
    }

    operatorSelection = this.textContent;
    console.log(`Operator: ${operatorSelection}`);
    savedValue = true;
    equalJustPressed = false;

    console.log(valueOne,valueTwo);
}

function execute(){
    console.log(valueOne,valueTwo)

    if (operatorSelection == "x"){
        displayResult = valueOne * valueTwo;
    } else if (operatorSelection == "/"){
        displayResult = valueOne / valueTwo;
    } else if (operatorSelection == "+"){
        displayResult = valueOne + valueTwo;
    } else if (operatorSelection == "-"){
        displayResult = valueOne - valueTwo;
    } 

    updateDisplay(displayResult);
    console.log(`Result = ${displayResult}`);

    valueOne = displayResult;

    equalJustPressed = true;
}

function updateDisplay(value){
    display.textContent = value;
}

// Adding continuous functionality
// Save result to valueOne after equal sign is pressed
// If the operator is pressed continue as normal
// If a number is pressed, start over on valueOne



// start
// click number
// save valueOne
// Click operator
// save operatorValue
// Click number
// save ValueTwo
// click Equals sign
// Update display to result, save result as valueOne
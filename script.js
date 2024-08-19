// NEXT ISSUE: Calculator cannot handle numbers with more that one digit, second value shouldn't be changed before operator is chosen

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

function convertValue(text){
    return parseFloat(text);
}

function setValues(){
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
    operatorSelection = this.textContent;
    console.log(operatorSelection);
    savedValue = true;
}

function execute(){
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
}

function updateDisplay(value){
    display.textContent = value;
}





// start
// click number
// save valueOne
// Click operator
// save operatorValue
// Click number
// save ValueTwo
// click Equals sign
// Update display to result, save result as valueOne
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

let valueOne = 1;
let valueTwo = 1;
let savedValue = false;
let operatorSelection = "";
let displayResult = 0;

function setValues(){
    if (!savedValue){
    valueOne = parseInt(this.textContent);
    console.log(`Value one: ${valueOne}`);
    savedValue = true;
    } else {
    valueTwo = parseInt(this.textContent);
    console.log(`Value two: ${valueTwo}`);
    savedValue = false;
    }
}

function setOperator(){
    operatorSelection = this.textContent;
    console.log(operatorSelection);
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

    updateDisplay()
}

function updateDisplay(){
    display.textContent = displayResult;
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
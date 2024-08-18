const allNumButtons = document.getElementsByClassName("number");
const allOperatorButtons = document.getElementsByClassName("operator");

for (i=0 ; i<allNumButtons.length ; i++){
    allNumButtons[i].addEventListener("click", setValues);
}
for (i=0 ; i<allOperatorButtons.length ; i++){
    allOperatorButtons[i].addEventListener("click", setOperator);
}

let valueOne = 1;
let valueTwo = 1;
let savedValue = false;
let operatorSelection = 0;

function setValues(){
    if (!savedValue){
    valueOne = this.textContent;
    console.log(`Value one: ${valueOne}`);
    savedValue = true;
    } else {
    valueTwo = this.textContent;
    console.log(`Value two: ${valueTwo}`);
    savedValue = false;
    }
}

function setOperator(){
    operatorSelection = this.textContent;
    console.log(operatorSelection);
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
const allNumButtons = document.getElementsByClassName("number");
const allOperatorButtons = document.getElementsByClassName("operator");

for (i=0 ; i<allNumButtons.length ; i++){
    allNumButtons[i].addEventListener("click", setValueOne);
}
for (i=0 ; i<allOperatorButtons.length ; i++){
    allOperatorButtons[i].addEventListener("click", setOperator);
}

let valueOne = 1;
let savedValue = false;
let operatorSelection = 0;

function setValueOne(){
    valueOne = this.textContent;
    console.log(valueOne);
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
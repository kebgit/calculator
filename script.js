const allNumButtons = document.getElementsByClassName("number");

for (i=0 ; i<allNumButtons.length ; i++){
    allNumButtons[i].addEventListener("click", setValueOne);
}

let valueOne = 1;
let savedValue = false;
let operatorSelection = 0;

function setValueOne(){
    valueOne = this.textContent;
    console.log(valueOne);
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
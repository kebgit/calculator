let valueOne = 1;

function setValueOne(){
    valueOne = this.textContent;
    console.log(valueOne);
}

let operatorSelection = 1;

const allNumButtons = document.getElementsByClassName("number");

for (i=0 ; i<allNumButtons.length ; i++){
    allNumButtons[i].addEventListener("click", setValueOne);
}
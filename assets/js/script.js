/**
 * Subtraction to calculate net weight from inweight and outweight
 */

function calc() {
    let input1 = parseInt(document.getElementById("inweight").value);
    let input2 = parseInt(document.getElementById("outweight").value);
    if (!input1) { input1 = 0; }
    if (!input2) { input2 = 0; }
    let total = document.getElementById("netweight");
    total.value = input1 - input2;
}

/**
 * Event listener to the submit button
 */

let counterDisplay = document.querySelector('.counterdisplay');
let counterPlus = document.querySelector('.counterplus');
 
let count = 0;
 
updateDisplay();
 
counterPlus.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;
 
function updateDisplay(){
    counterDisplay.innerHTML = count;
};

/**
 * Alert for target weight within 10% tolerance
 */

let load = document.getElementById("netweight");
let target = document.getElementById("targetweight");

counterPlus.addEventListener("click", checkweight)

function checkweight() {
    if (load.value === target.value || load.value < (target.value*1.1) && load.value > (target.value*0.9)) {
        alert("Weight within 10% tolerance - vehicle can pass")
    } else {
        alert("Weight OUTWITH 10% tolerance - STOP vehicle!")
    }
}




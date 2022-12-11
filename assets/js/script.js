/**
 * Subtraction to calculate net weight from inweight and outweight
 */

function calc() {
    let inweight = parseInt(document.getElementById("inweight").value);
    let outweight = parseInt(document.getElementById("outweight").value);
    if (!inweight) { inweight = 0; }
    if (!outweight) { outweight = 0; }
    let load = document.getElementById("netweight");
    load.value = inweight - outweight;
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
}

/**
 * Alert for target weight within 10% tolerance 
 * Alert if values are not numbers
 */
counterPlus.addEventListener("click", checkweight);

function checkweight() {
    let load = document.getElementById("netweight");
    let target = document.getElementById("targetweight");
    let inweight = parseInt(document.getElementById("inweight").value);
    let outweight = parseInt(document.getElementById("outweight").value);

    if (isNaN(target.value) || isNaN(inweight) || isNaN(outweight)) {
        alert ("Please enter a valid number");
    } else if (load.value === target.value || load.value < (target.value*1.1) && load.value > (target.value*0.9)) {
        alert("Weight within 10% tolerance - vehicle can pass");
    } else {
        alert("Weight OUTWITH 10% tolerance - STOP vehicle!");
    }
}



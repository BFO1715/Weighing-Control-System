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
 * Alert for target weight met or not
 */

 function notice() {
     alert(`Target Weight met`);
 }  



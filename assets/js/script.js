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

    target = parseInt(document.getElementById("targetweight"));
    if (target === total) {
        alert(`Target Weight met`);
    } else {
        alert(`Target Weight not met - note vehicle registration`);
    }  
}

/**
 * Add event listener to the submit button
 */

 let counterDisplayElem = document.querySelector('.counter-display');
 let counterPlusElem = document.querySelector('.counter-plus');
 
 let count = 0;
 
 updateDisplay();
 
 counterPlusElem.addEventListener("click",()=>{
     count++;
     updateDisplay();
 }) ;
 
 function updateDisplay(){
     counterDisplayElem.innerHTML = count;
 };


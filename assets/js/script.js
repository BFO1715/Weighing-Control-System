/**
 * Subtraction to calculate net weight from inweight and outweight
 */

function calc() {
    var input1 = parseInt(document.getElementById("inweight").value);
    var input2 = parseInt(document.getElementById("outweight").value);
    // to make sure that they are numbers
    if (!input1) { input1 = 0; }
    if (!input2) { input2 = 0; }
    var total = document.getElementById("netweight");
    total.value = input1 - input2;
}

/**
 * Add event listener to the submit button
 */


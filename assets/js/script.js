function updateDue() {
    var total = parseInt(document.getElementById("totalval").value);
    var val2 = parseInt(document.getElementById("inideposit").value);
    // to make sure that they are numbers
    if (!total) { total = 0; }
    if (!val2) { val2 = 0; }
    var ansD = document.getElementById("remainingval");
    ansD.value = total - val2;
}
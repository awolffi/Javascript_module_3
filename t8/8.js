'use strict';




function myFunction() {
    const operation = document.getElementById("operation").value;

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (operation == "add") {
        let ans = num1 + num2;
        document.getElementById("result").innerHTML = `result: ${ans}`;
    } else if (operation == "sub") {
        let ans = num1 - num2;
        document.getElementById("result").innerHTML = `result: ${ans}`;
    }else if (operation == "multi") {
        let ans = num1 * num2;
        document.getElementById("result").innerHTML = `result: ${ans}`;
    } else {
        let ans = num1 / num2;
        document.getElementById("result").innerHTML = `result: ${ans}`;
    }
}
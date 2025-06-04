"use strict";

// get value from prompt
const firstValue = +prompt("Please enter first value")
const secondValue = +prompt("Please enter second value")
const thirdValue = +prompt("Please enter third value")

//calculate average number
function average(firstValue, secondValue, thirdValue){
    const values = [firstValue, secondValue, thirdValue];

    if (!values.every(Number.isFinite)) {
        alert("Please enter a valid numbers");
        return;
    }

    const avg = values.reduce((sum, value) => sum + value, 0) / values.length;
    alert(`average number is: ${avg}`);
}

//output value
average(firstValue, secondValue, thirdValue);
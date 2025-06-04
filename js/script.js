"use strict";

// get number of hours from user
const hours= +prompt("Please enter hours");

// convert hours to minutes
function convertHourToSeconds(hours) {
    if (isNaN(hours) || hours <= 0) {
        alert("Please enter a valid positive number");
        return;
    }

    const seconds = hours * 3600;
    alert(`${hours} hour(s) = ${seconds} seconds`);
}

//output data
convertHourToSeconds(hours)
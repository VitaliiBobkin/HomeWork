"use strict";

    // 1. Ask for user's name (string)
    let userName = prompt("Enter your name:");

    // 2. Ask for the user's age and convert to number
    let age = Number(prompt("How old are you?"));

    // 3. Ask for confirmation (boolean)
    const isAgreed = confirm("Do you agree to participate?");

    // 4. Large number (BigInt)
    const userId = 12345678777774567890n;

    // 5. Null value
    let bonusCode = null;

    // 6. Undefined value
    let secondName;

    // Show results in the alert
    alert(
        `User Data Collected:\n\n` +
        `Name : ${userName}\n` +
        `Age : ${age}\n` +
        `Agreed to participate: ${isAgreed}`
    );

    // Show results in the console
    console.log(`User Data and Types:
    1. userName = ${userName} (${typeof userName})
    2. age = ${age} (${typeof age})
    3. isAgreed = ${isAgreed} (${typeof isAgreed})
    4. userId = ${userId} (${typeof userId})
    5. bonusCode = ${bonusCode} (${typeof bonusCode})
    6. secondName = ${secondName} (${typeof secondName})`);

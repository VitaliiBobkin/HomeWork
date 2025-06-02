"use strict";

// get data from user
const name = prompt("What is your name?");
const age = Number(prompt("How old are you?"));
const wantsNotifications = confirm("Would you like to receive notifications?");

// create object session
const session = {
    name: name, // string
    age: age, // number
    wantsNotifications: wantsNotifications, // boolean
    userId: 1234567777777456789n, // bigInt
    lastLogin: null, // null
    nickname: undefined, // undefined
    favoriteTech: ["JavaScript", "HTML", "CSS"], // array
    settings: {
        theme: "dark", // string
        autoLogin: false // boolean
    }
};

// output to alert
alert(`Hello, ${session.name}! Your ID: ${session.userId}`);

// output to console
console.log(`object session: ${session}`);

// output types of fields
console.log(`name: ${typeof session.name}`);
console.log(`age: ${typeof session.age}`);
console.log(`wantsNotifications: ${typeof session.wantsNotifications}`);
console.log(`userId: ${typeof session.userId}`);
console.log(`lastLogin: ${typeof session.lastLogin}`);
console.log(`nickname: ${typeof session.nickname}`);
console.log(`favoriteTech: ${typeof session.favoriteTech}`);
console.log(`settings: ${typeof session.settings}`);
console.log(`settings.theme: ${typeof session.settings.theme}`);
console.log(`settings.autoLogin: ${typeof session.settings.autoLogin}`);



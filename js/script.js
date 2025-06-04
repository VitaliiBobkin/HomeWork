"use strict";

//get a number of years from the user
function getBirthYear() {
    const birthYear = +prompt("Enter your year of birth:");
    if (birthYear === null || isNaN(birthYear)) {
        alert("It's a pity that you did not want to enter your date of birth.");
        return null;
    }
    return birthYear;
}

//get city from the user
function getCity() {
    const city = prompt("Which city do you live in?");
    if (city === null || city === "") {
        alert("It's a pity that you did not want to enter your city.");
        return null;
    }
    return city.trim();
}

//get sport from the user
function getSport() {
    const sport = prompt("What is your favorite sport?");
    if (sport === null || sport === "") {
        alert("It's a pity that you did not want to enter your favorite sport.");
        return null;
    }
    return sport.trim();
}

//get information about a city
function getUserInfoAboutCity(age, city) {
    let message;

    switch (city.toUpperCase()) {
        case "KYIV":
            message = `You are approximately ${age} years old.\nYou live in the capital of Ukraine.`;
            break;
        case "WASHINGTON":
            message = `You are approximately ${age} years old.\nYou live in the capital of the USA.`;
            break;
        case "LONDON":
            message = `You are approximately ${age} years old.\nYou live in the capital of the United Kingdom.`;
            break;
        default:
            message = `You are approximately ${age} years old.\nYou live in the city of ${city}.`;
    }

    return message;
}

//get information about a sport
function getUserFavoriteSport(sport) {
    let message;

    switch (sport.toUpperCase()) {
        case "FOOTBALL":
            message = "Cool! Do you want to become Lionel Messi?";
            break;
        case "BASKETBALL":
            message = "Cool! Do you want to become LeBron James?";
            break;
        case "TENNIS":
            message = "Cool! Do you want to become Roger Federer?";
            break;
        default:
            message = "You almost a champion!";
    }

    return message;
}

// output information about the user
function userInfo() {
    const birthYear = getBirthYear();
    if (birthYear === null) return;

    const city = getCity();
    if (city === null) return;

    const sport = getSport();
    if (sport === null) return;

    const cityMessage = getUserInfoAboutCity(birthYear, city);
    const sportMessage = getUserFavoriteSport(sport);

    alert(`${cityMessage}\n${sportMessage}`);
}

userInfo();




"use strict";

// 1 Output the numbers from 20 to 30 through a gap, using a step of 0.5 (20 20.5 21 21.5…)
for (let i = 20; i <= 30; i += 0.5) {
    console.log(`numbers using a step of 0.5= ${i}`);
}

// 2 One dollar costs 27 hryvnias. Output the data with the calculation of the cost of 10, 20, 30... 100 dollars.
const rate = 27;
for (let dollar = 10; dollar <= 100; dollar += 10) {
    const hryvnias = dollar * rate;
    console.log(`dollar: ${dollar} = hryvna: ${hryvnias}`);
}

// 3 given an integer. output all integers from 1 to 100 whose square does not exceed the number N.
function findNumbersWithSquareLessThanN(N) {
    if (typeof N !== 'number' || !Number.isInteger(N) || N < 1) {
        alert("Please enter a valid integer greater than 0.");
        return;
    }

    console.log(`Numbers from 1 to 100 whose square does not exceed ${N}:`);
    let found = false;
    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            console.log(i);
            found = true;
        }
    }

    if (!found) {
        alert("There are no such numbers.");
    }
}
const N = +prompt("enter a number");
findNumbersWithSquareLessThanN(N)

// 4 find out if it is prime (a prime number is a number greater than 1 that has no other divisors than 1 and itself).
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}

const number = +prompt("Enter an integer:");
console.log(`${number} is ${isPrime(number) ? "a prime" : "not a prime"} number.`);

//5 given a certain number, determine whether this number can be obtained by raising the number 3 to a certain power.
// (For example, the numbers 9, 81 can be obtained, but 13 cannot.)
function isReducingOfNumber(number) {
    if (number < 1) return false;
    while (number % 3 === 0) {
        number /= 3;
    }

    return number === 1;
}

const result = +prompt("Enter a number:");
console.log(`${result} ${isReducingOfNumber(result) ? "can" : "cannot"} be obtained by raising 3 to a power.`);

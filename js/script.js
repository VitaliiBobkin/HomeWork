"use strict";

//1 output the numbers from 10 to 20 on a single line separated by commas on the page.
let result = "";
for (let i = 10; i <= 20; i++) {
    result += i + ", ";
}
console.log(result);


//2 output the squares of numbers from 10 to 20.
for (let i = 10; i <= 20; i++) {
    console.log(`${i}² = ${i * i}`);
}

//3 output the squares of numbers from 10 to 20.
for (let i = 1; i <= 10; i++) {
    console.log(`7 × ${i} = ${7 * i}`);
}

//4 Find the sum of all integers from 1 to 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(`sum numbers from  1 to 15: ${sum}`);

//5 Find the product of all integers from 15 to 35.
let sum2 = 1;
for (let i = 15; i <= 35; i++) {
    console.log(sum2 *= i);
}

//6 Find the arithmetic mean of all integers from 1 to 500.
let sum3 = 0;
const n = 500;
for (let i = 1; i <= n; i++) {
    sum3 += i;
    const average = sum3 / n;
    console.log(`arithmetic mean of all integers from 1 to 500: ${average}`);
}

//7 output the sum of only even numbers in the range from 30 to 80.
let sum4 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        console.log(`Sum of even numbers from 30 to 80: ${sum4 += i}`);
    }
}


//8 output all numbers in the range from 100 to 200 that are multiples of 3.
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(`numbers multiples of 3: ${i}`);
    }
}


//9 given a natural number, find and output all its divisors.
function findDivisors(num) {
    if (num <= 0 || !Number.isInteger(num)) {
        console.log("Please enter a natural number (positive integer).");
        return;
    }

    const divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }

    console.log(`Divisors of ${num}: ${divisors.join(", ")}`);
}

const number = +prompt("Enter a natural number:");
findDivisors(number);


//10 determine the number of its even divisors.
function countEvenDivisors(num) {
    if (num <= 0 || !Number.isInteger(num)) {
        console.log("Please enter a natural number (positive integer).");
        return;
    }

    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0 && i % 2 === 0) {
            count++;
        }
    }

    console.log(`The number of even divisors of ${num} is: ${count}`);
}

// Example usage:
const number2 = +prompt("Enter a natural number:");
countEvenDivisors(number2);


//11 find the sum of its even divisors.
function sumEvenDivisors(num) {
    if (num <= 0 || !Number.isInteger(num)) {
        console.log("Please enter a natural number (positive integer).");
        return;
    }

    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0 && i % 2 === 0) {
            sum += i;
        }
    }

    console.log(`The sum of even divisors of ${num} is: ${sum}`);
}

const number3 = +prompt("Enter a natural number:");
sumEvenDivisors(number3);


//12 output the multiplication table of numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(`\n multiplication by ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
}

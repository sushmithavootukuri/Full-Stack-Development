// Programs in anonymous function and IIFE

let arr = [];
for (let i = 1; i <= 30; i++)
    arr.push(i);

let str = ["Hello", "my", "name", "is", "sushmitha", "and", "this", "is", "week2", "task"];

//**********************************************************************

//  * Print odd numbers in an array 

console.log('Using Anounymous Function : 1) Print odd numbers in an array ');
// using anonymous function
getOddNumbers = (arr) => {
    let oddArr = [];
    oddArr = arr.filter(num => num % 2 != 0);
    console.log(oddArr);
}
getOddNumbers(arr);

console.log('Using IIFE : 1) Print odd numbers in an array ');
(function () {
    let oddArr = [];
    oddArr = arr.filter(num => num % 2 != 0);
    console.log(oddArr);
})(arr)

//**********************************************************************

//  * Convert all the strings to title caps in a string array 

console.log('Using Anounymous Function : 2) Convert all the strings to title caps in a string array  ');
capsWord = (str) => {
    let words = [];
    words = str.map((word) => {
        return word.toUpperCase()
    });
    console.log(str, words);
}
capsWord(str);

console.log('Using IIFE : 2) Convert all the strings to title caps in a string array  ');
(function () {
    let words = [];
    words = str.map((word) => {
        return word.toUpperCase()
    });
    console.log(str, words);
})(str)

//**********************************************************************
//  * Sum of all numbers in an array 

console.log('Using Anounymous Function : 3) Sum of all numbers in an array  ');
sumNum = (arr) => {

    let res = arr.reduce((sum, num) => { return sum + num });
    console.log(res);
}
sumNum(arr);

console.log('Using IIFE : 3) Sum of all numbers in an array  ');
(function () {
    console.log(arr.reduce((num, sum) => { return sum + num }));
})(arr)

//**********************************************************************
//  * Return all the prime numbers in an array 

console.log('Using Anounymous Function : 4) Return all the prime numbers in an array ');
getPrimes = (arr) => {

    let primes = [];
    primes = arr.filter((num) => {
        let isPrime = true;
        if (num == 1)
            isPrime = false;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            return num
    });
    console.log(primes);
}
getPrimes(arr);

console.log('Using IIFE : 4) Return all the prime numbers in an array ');
(function () {
    let primes = [];
    primes = arr.filter((num) => {
        let isPrime = true;
        if (num == 1)
            isPrime = false;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            return num
    });
    console.log(primes);
})(arr)

//**********************************************************************
//  * Return all the palindromes in an array


console.log('Using Anounymous Function : 5) Return all the palindromes in an array');
palindrome = (arr) => {
    let PalindromeNum = [];
    PalindromeNum = arr.filter(num => {
        return num.toString() == num.toString().split('').reverse().join('')
    });
    console.log(PalindromeNum);
}
palindrome(arr);

console.log('Using IIFE : 5) Return all the palindromes in an array');
(function () {
    let PalindromeNum = [];
    PalindromeNum = arr.filter(num => {
        return num.toString() == num.toString().split('').reverse().join('')
    });
    console.log(PalindromeNum);
})(arr)

//**********************************************************************
//  * Return median of two sorted arrays of same size

console.log('Using Anounymous Function : 6) Return median of two sorted arrays of same size');
median = (arr) => {
    let md = [], len = arr.length;
    if (len % 2 != 0) {
        md = arr[len / 2]
    }
    else {
        md = (arr[len / 2] + arr[len / 2 - 1]) / 2
    }
    console.log(md);
}
median(arr);

console.log('Using IIFE : 6) Return median of two sorted arrays of same size');
(function () {
    let md = [], len = arr.length;
    if (len % 2 != 0) {
        md = arr[len / 2]
    }
    else {
        md = (arr[len / 2] + arr[len / 2 - 1]) / 2
    }
    console.log(md);
})(arr)


//**********************************************************************
//  * Remove duplicates from an array

console.log('Using Anounymous Function  : 7)  Remove duplicates from an array');

let arrayWithDuplicates = ["Darcy", "Alex", "Sam", "Joe", "Hat", "Darcy", "Alex", "Sam", "Joe", "Hat", "Darcy", "Alex", "Sam", "Joe", "Hat", "Darcy", "Alex", "Sam", "Joe", "Hat"];
console.log(arrayWithDuplicates);

removeDuplicates = (array) => {
    let uni = [];
    uniqueArray = array.filter(function (item, pos) {
        return array.indexOf(item) == pos;
    })
    console.log(uniqueArray);
}
removeDuplicates(arrayWithDuplicates);

console.log('Using IIFE  : 7)  Remove duplicates from an array');

arrayWithDuplicates = ["Darcy", "Alex", "Sam", "Joe", "Hat", "Darcy", "Alex", "Sam", "Joe", "Hat", "Darcy", "Alex", "Sam", "Joe", "Hat", "Darcy", "Alex", "Sam", "Joe", "Hat"];
console.log(arrayWithDuplicates);

(function () {
    let uniqueArray = [];
    uniqueArray = arrayWithDuplicates.filter(function (item, pos) {
        return arrayWithDuplicates.indexOf(item) == pos;
    })
    console.log(uniqueArray);
})(arrayWithDuplicates);


//**********************************************************************
//  * Rotate an array by k times and return the rotated array

console.log('Using Anounymous Function  : 8) Rotate an array by k times and return the rotated array');
let arr1 = [1, 2, 3, 4, 5];
console.log('Before rotating', arr1);

rotateArray = (arr, k) => {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
}
rotateArray(arr1, 3);
console.log('After rotating', arr1);

console.log('Using IIFA : 8) Rotate an array by k times and return the rotated array');
let arr2 = [1, 2, 3, 4, 5];
console.log('Before rotating', arr2);

(function () {

    for (let i = 0; i < k; i++) {
        arr2.unshift(arr2.pop());
    }
    console.log('After rotating', arr2);
})(arr2, k = 3)


/** Problem Statement
 * Write a program that defines a function to calculate the sum of two integers and print the result. Call this function by passing two integer values.
 */

function sum(a, b) {
    return a + b;
}

const result = sum(5, 10);
console.log("The sum is:", result);


/** Problem Statement
 * Write a program to print all even number in an array.
 */

function printEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printEvenNumbers(numbers);


/** Problem Statement
 * Write a function that return the number of negative numbers in an array.
 */
function countNegativeNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

const mixedNumbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
const negativeCount = countNegativeNumbers(mixedNumbers);
console.log("Number of negative numbers:", negativeCount);


/** Problem Statement
 * Write a function that returns the smallest number in an array.
 */
function findSmallestNumber(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

const numbersArray = [5, 3, 8, 1, 4];
const smallestNumber = findSmallestNumber(numbersArray);
console.log("The smallest number is:", smallestNumber);

/** Problem Statement
 * Write a function that returns the largest number in an array.
 */
function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

const largestNumber = findLargestNumber(numbersArray);
console.log("The largest number is:", largestNumber);

/** Problem Statement
 * Write a function that returns the second largest number in an array.
 */
function findSecondLargestNumber(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const secondLargestNumber = findSecondLargestNumber(numbersArray);
console.log("The second largest number is:", secondLargestNumber);

/** Problem Statement
 * Write a function that takes an integer n and returns how may digits it contains.
 */

function countDigits(n) {
    if (n === 0) return 1;
    let count = 0;
    while (n !== 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

const digitCount = countDigits(12345);
console.log("Number of digits:", digitCount);

/** Problem Statement
 * Write a function that an integer x and return true if it reads the same backword and forward. otherwise return false.
 */
function isPalindrome(x) {
  let copyX = x;
  let rev = 0;
  while (copyX !== 0) {
      rev = rev * 10 + (copyX % 10);
      copyX = Math.floor(copyX / 10);
  }
  return rev === x;
}

/** Problem Statement
 * Write a function reverse(x) that takes 32-bit signed integer and returns its digits reversed. If the reversed value overflows 32-bit signed integer range, return 0.
 */

function reverse(x) {
  let rev = 0;
  while (x !== 0) {
      rev = rev * 10 + (x % 10);
      x = Math.floor(x / 10);
  }
  // Check for 32-bit signed integer overflow
  if (rev > 2147483647 || rev < -2147483648) {
      return 0;
  }
  return rev;
}


var reverse2 = function(x) {
  let xCopy = x;
  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    let last = x % 10;
    rev = rev * 10 + last;
    x = Math.floor(x / 10);
  }
  if (rev > 2**31 - 1) return 0;
  return xCopy < 0 ? -rev : rev;
};

console.log(reverse2(123)); // 321
    

// solution-1:
function calculateDifference(a, b) {
    return a - b;
}


const result= calculateDifference(10, 5);
console.log("The difference is:", result);

// solution-2:
function isOdd(number) {
    return number % 2 !== 0;
}


const result1  = isOdd(7);
console.log('is odd?',result1)
const result2  = isOdd(10);
console.log('is odd?',result2)

// solution-3:
function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([5, 3, 8, 1, 9])); 

// solution-4:
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([5, 3, 8, 1, 9, 2])); 

// solution-5:
function sortArrayDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}
console.log(sortArrayDescending([5, 3, 8, 1, 9])); 

// solution-6:
function lowercaseFirstLetter(str) {
    if (!str) return "";
    return str[0].toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello World")); 


// solution-7:
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
console.log(findAverage([5, 3, 8, 1, 9])); 

// solution-8:
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2020)); 
console.log(isLeapYear(1900)); 

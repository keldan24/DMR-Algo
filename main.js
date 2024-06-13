// Leap Year
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log('is leap year');
            } else {
                console.log('is not leap year');
            }
        } else {
            console.log('is leap year');
        }
    } else {
        console.log('is not leap year');
    }
}
console.log(isLeapYear(2020)); 
console.log(isLeapYear(2021)); 


// Movie Ticket based on age
function getTicketPrice(age) {
    if (age <= 12) {
        return "$10";
    } else if (age >= 13 && age <= 17) {
        return "$15";
    } else if (age >= 18) {
        return "$20";
    } else {
        return "Invalid age";
    }
}
console.log(getTicketPrice(10));
console.log(getTicketPrice(15)); 
console.log(getTicketPrice(25)); 
console.log(getTicketPrice(0)); 


// Fibonacci
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(1)); 
console.log(fibonacci(5));
console.log(fibonacci(10));

// function Palindrome
function isPalindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    function checkPalindrome(start, end) {
        if (start >= end) {
            return true;
        }
        if (str[start] !== str[end]) {
            return false;
        }
        return checkPalindrome(start + 1, end - 1);
    }
    
    return checkPalindrome(0, str.length - 1);
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("No 'x' in Nixon"));

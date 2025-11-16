// function to calculate tax 
function calculateTax(amount) {
    return amount * 0.1;
}
console.log(calculateTax(10000));

// function to convert text to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}
console.log(convertToUpperCase("moringa school"));

// function to find the larger number
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
console.log(findMaximum(16,99));

// function to chech direction of string
function isPalindrome(word) {
    word = word.toLowerCase();
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    if (word === reversed) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalindrome("madam"));

// function to calculate discounts 
function calculateDiscountedPrice(originalPrice, discountedPercentage) {
    return originalPrice - (originalPrice * discountedPercentage / 100);
}
console.log(calculateDiscountedPrice(5000, 15.5));

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
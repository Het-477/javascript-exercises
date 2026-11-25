const palindromes = function (inputString) {

    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

    const filteredString = inputString
        .toLowerCase()
        .split("")
        .filter((character) => alphanumerical.includes(character))
        .join("");

    const reversed = filteredString.split("").reverse().join("");

    if (reversed.toLowerCase() === filteredString.toLowerCase()) {
        // return `${inputString} === ${reversed} therefore, they are palindrome`;
        return true;
    } else {
        // return `${inputString} and ${reversed} are not palindrome`;
        return false;
    }
};

// console.log(palindromes("fjndjn"));

// Do not edit below this line
module.exports = palindromes;

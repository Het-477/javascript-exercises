const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const sum = function (numArray) {
    // const arrLen = numArray.length;

    // if (arrLen === 1) {
    //     return numArray[0];
    // }

    // let sum = 0;
    // for (let i = 0; i < arrLen; i++) {
    //     sum = sum + numArray[i];
    // }

    // return sum;

    const num = numArray.reduce((total, current) => total + current, 0);
    return num;
};

const multiply = function (numArray) {
    // const arrLen = numArray.length;
    // let sum = 1;
    // for (let i = 0; i < arrLen; i++) {
    //     sum = sum * numArray[i];
    // }

    // return sum;

    return numArray.reduce((a, b) => a * b);
};

const power = function (base, exponent) {
    /* if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return base;
    }

    // number =
    
    for (let i = 0; i <= exponent; i++) {
        base = base * base;
    }

    return base; */

    return base ** exponent;

};

const factorial = function (n) {
    let product = 1;

    for (let i = n; i > 0; i--) {
        product = product * i;
    }
     
    return product;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};

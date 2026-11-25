 fibonacci = function(n) {
    if (n <= 0 || (Number.isNaN(Number(n)))) return "OOPS";
    // if (Number.isNaN(Number(n))) return "OOPS";
    if (n <= 2) return 1;

    // const fib = [0.1];
    let prev = 1; 
    let curr = 1; 

    for (let i = 3; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;

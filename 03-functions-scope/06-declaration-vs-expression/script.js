// Function declaration
console.log(addDollarSign(105));

function addDollarSign(value) {
    return '$' + value;
}

// Function expression

const addPlusSign = function (value) {
    return '+' + value;
};

console.log(addPlusSign(350));
function calculator(num1, num2, operator) {
    if(operator == '+') {
        return num1 + num2;
    } else if(operator == '-') {
        return num1 - num2;
    } else if(operator == '*') {
        return num1 * num2;
    } else if(operator == '/') {
        return num1 / num2;
    } else {
        return "Invalid Operator";
    }
}

function calculator2(num1, num2, operator) {
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid Operator";
    }

    console.log(result);
    return result;
}

console.log(calculator(5,2,'^'));
calculator2(5,2,'&');

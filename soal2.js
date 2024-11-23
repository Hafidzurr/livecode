function calculator (value1, value2, operator) {
    switch (operator) {
        case "+":
            return value1 + value2;
        case"-":
            return value1 - value2;
        case"*":
            return value1 * value2;
        case"/":
            return value1/value2;
        default:
            return console.log("Operator tidak dikenali");
    }
}

console.log(calculator(12, 12, "*"));
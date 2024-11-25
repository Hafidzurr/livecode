const numbers = [1,2,3,4,5];
const newArray = numbers.map(perkalianNumber);

function perkalianNumber(num){
    return num * 2
}

console.log(newArray);
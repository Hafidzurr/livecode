function checkNumber(number){
    if (number > 0){
        return console.log(`${number} angka adalah positif `);
    } else if(number < 0){
        return console.log(`${number} angka adalah negatif `);
    } else if (number == 0) {
        return console.log(`${number}`);
    } else {
        return console.log("Number tidak terdefinisikan");
    }
}

checkNumber(0);
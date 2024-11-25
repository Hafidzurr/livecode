/**
 * - function ini merima string
 * - setelah masuk kedalam function, 
 * string tersebut melewati proses perulangan untuk mengidentifikasi apakah palindrome atau bukan
 * - output dari function tersebut menampilkan nilai boolean, yaitu true menghasilkan bahwa "kata 
 * tersebut palindrome" atau false menghasilkan "kata tersebut tidak palindrome"
 */

function palindromeChecker(text){
    console.log(text, ": Ini adalah debugging pertama");
    for (let i = 0; i < text.length; i++) {
        console.log(text[i], i, text[text.length - i -1]);
    }
}

palindromeChecker("level");
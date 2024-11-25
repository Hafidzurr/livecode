/**
 * Kamu sedang berada di event Pokemon. Di sana terdapat sistem yang melakukan pemeriksaan terhadap level 
 * dan akan menempelkan status kamu berdasarkan hal tersebut. Rincian sebagai berikut:
Jika user punya kartu sebagai berikut:
kurang dari 20 kartu = level 'noob'
lebih dari 20 dan kurang dari 40 kartu = level 'bolehlah'
lebih dari 40 kartu = level 'mastah'

jika user bernama 'Jeki' dan kartunya ada 34, maka outputnya 'Jeki - bolehlah'
*/

/**
 * Ada penambahan sistem baru, yaitu menambahkan poin berdasarkan jumlah kartu rare. berikut rinciannya:
jika kartu kurang dari 20, base poin adalah 30
jika kartu lebih dari 20 dan kurang dari 40 kartu, base poin adalah 50
sisanya base poin adalah 70
rules untuk penambahan poin:
jika memiliki kartu rare, setiap kartu rare yang dimiliki akan menambah poin sebanyak 20

contoh, Jeki memiliki kartu sebanyak 34 dan memiliki 4 kartu rare, outputnya adalah, "Status Jeki adalah 'bolehlah' dan poin Jeki adalah 130."
 */

/**
 * Setelah head of event merevisi acara, ada tambahan pemeriksaan baru, yaitu stempel berdasakan umur dari peserta. Rinciannya:
jika umurnya kurang dari 15, maka stempelnya adalah 'kids'
jika lebih dari 15 tapi kurang dari 20, stempelnya adalah 'teenagers'
jika lebih dari 20 tapi kurang dari 25 'big kids'
dan lebih dari 25 diberikan stempel 'big teenagers'

jadi jika dikumpulkan, output Jeki sekarang adalah "Status jeki adalah 'bolehlah' dan poin Jeki adalah 130. Karena Jeki berumur 28 tahun, maka Jeki adalah 'big teenagers'"
 */

const name = "Jeki"
const card = 34
const rareCard = 0
let level =  "No Level"
let poin = 0
const age = 28
let stample = "No Status"

if(card < 20){
    level = "noob"
    poin = 30

} else if(card > 20 && card < 40){
    level = "bolehlah"
    poin = 50
} else {
    level = "mastah"
    poin = 70
 
}

if(rareCard) {
    poin = poin + (rareCard * 20)
}

if(age < 15) {
    stample = "kids"
} else if(age > 15 && age < 20) {
    stample = "teenagers"
} else if(age > 20 && age < 25) {
    stample = "big kids"
} else {
    stample = "big teenagers"
}

console.log(`Status ${name} adalah ${level} dan poin ${name} adalah ${poin}. Status ${name} adalah ${stample}`);




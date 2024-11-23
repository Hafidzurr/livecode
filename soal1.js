const nama = "hafidz";
const umur = 21;
const tanggal = new Date().toLocaleDateString();
const menikah = true;
const beratBadan = 54.5;

console.log(`Hari ini tanggal ${tanggal}. Nama saya ${nama}, umur saya ${umur} tahun, berat badan saya ${beratBadan} dan ${(menikah === true) ? "Menikah" : "Belum Menikah"} `);

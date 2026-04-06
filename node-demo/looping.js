
// looping.js
const tugas = ["DDP", "Sistem Operasi", "Struktur Data", "Web Programming"];

console.log("Daftar Tugas Polman Hari Ini:");
tugas.forEach((item, index) => {
    console.log(`${index + 1}. Kerjakan modul ${item}`);
});

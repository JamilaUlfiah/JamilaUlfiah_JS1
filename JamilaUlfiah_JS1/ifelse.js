/* if else */
var angka = 65;
if(angka >= 75){
    console.log('Selamat kamu mendapatkan nilai A');
}else{
    console.log('Maaf kamu tidak mendapatkan nilai A');
}

/* else if */
var angka = 20;

if (angka >= 95) {
  console.log("Mendapatkan nilai A");
} else if (angka >= 75 && angka <= 79) {
  console.log("Mendapatkan nilai B+");
} else if (angka >= 60 && angka <= 64) {
  console.log("Mendapatkan nilai C+");
} else if (angka >= 45 && angka <= 59) {
  console.log("Mendapatkan nilai D");
} else {
  console.log("Mendapatkan nilai E");
}

/* nested if */
var nilai = -1;

if (nilai % 2 === 0) {
  console.log("Nilai " + nilai + " merupakan angka genap.");
  if (nilai > 0) {
    console.log("Nilai tersebut juga merupakan angka genap.");
  }
} else {
  console.log("Nilai " + nilai + " merupakan angka ganjil.");
  if (nilai < 0) {
    console.log("Nilai tersebut juga merupakan angka negatif.");
  }
}


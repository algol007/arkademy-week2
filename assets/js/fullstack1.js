// 1. Kategori: Beginner
// Seorang anak dimintai tolong oleh ibunya untuk membeli mie instan di minimarket. Anak tersebut dibekali oleh ibunya uang sebanyak Rp 50.000,00. Di minimarket, mie instan dijual dengan harga Rp 2.500,00. Berapakah mie instan yang didapatkan oleh anak tersebut jika minimarket tersebut sedang mengadakan promosi “setiap pembelian 4 mie instan, akan mendapatkan bonus 1 mie instan”?

function beliMie(uang, harga) {
  console.log(`uang anda sebanyak ${uang} rupiah`);
  console.log(`harga 1 bungkus mie adalah ${harga} rupiah`);
  if (uang < harga) {
    console.log("uang anda tidak cukup");
  } else {
    let mie = Math.floor(uang / harga);
    let bonus = mie / 4;
    let total = Math.floor(mie + bonus);
    console.log("Jika membeli 4, anda akan mendapatkan bonus 1 bungkus mie");
    console.log(`Anda mendapatkan bonus ${bonus} bungkus mie`);
    console.log(`Uang anda bisa membeli ${total} bungkus mie`);
  }
}

beliMie(100000, 2500);

// 2. Kategori: Beginner

// Segitiga Siku-siku
// Segitiga siku-siku adalah segitiga yang salah satu sudutnya 90o atau sudut siku. Buatlah sebuah program untuk membentuk sebuah segitiga siku-siku.

// REQUIREMENT:
// Input user berupa panjang alas dan tinggi segitiga (alas dan tingginya sama)dengan ketentuan :
// a. 0 < Alas/Tinggi < 10
// b. Segitiga dibentuk dengan angka prima yang nilainya mulai dari awal setiap barisnya.
// c. Output berupa segitiga siku-siku.

let data = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

function triangle(number) {
  if (number < 1 || number > 9) {
    console.log("Alas harus lebih dari 0 dan kurang dari 10");
  } else {
    for (let i = 1; i <= number; i++) {
      let result = "";
      for (let j = 0; j < i; j++) {
        result += data[j] + " ";
      }
      console.log(result);
    }
  }
}

triangle(5);

// function isPrime(number) {
//   if (number < 2) {
//     console.log(`${number} bukan bilangan prima`);
//     return false;
//   } else if (number == 2) {
//     triangle(number);
//   } else {
//     for (let x = 2; x < number; x++) {
//       if (number % x === 0) {
//         console.log(`${number} bukan bilangan prima`);
//         return false;
//       }
//     }
//     triangle(number);
//   }
// }

// isPrime(8);

//3. Pohon Imajinatif
// Diketahui sebuah pohon imajinatif yang tumbuh di sebuah taman.
// Pohon tersebut hanya tumbuh sepanjang 1 m saat musim gugur dan
// 2 kali lipat tinggi pohon tersebut saat musim semi.
// Buatlah program yang menentukan tinggi pohon tersebut setelah Y
// tahun dengan tinggi awal X m.

// REQUIREMENT:
// Input user berupa nilai X dan Y dengan ketentuan :
// X > 0
// Y > 0
// Output berupa tinggi akhir pohon tersebut dengan ketentuan:
// Pada 1 tahun, musim semi datang terlebih dahulu dibandingkan musim gugur.

function tinggiPohon(x, y) {
  if (x <= 0) {
    console.log("Pohon belum di tanam");
  } else if (y <= 0) {
    console.log("Orang yang mau tanam pohon belum lahir");
  } else {
    for (let i = 0; i < y; i++) {
      x *= 2; //Musim Semi
      x += 1; //Musim Gugur
    }
    console.log(`Selama waktu ${y} tahun`);
    console.log(`Pohon tumbuh setinggi ${x} meter`);
  }
}

tinggiPohon(1, 3);

// 4. Input berupa array statis yang sudah disediakan secara HARDCODE
// Array dibuat sepanjang 10 data
// Output menampilkan 4 hal :
// a. Data terkecil
// b. Data terbesar
// c. Data yang disortir dari data terkecil ke terbesar
// d. Data yang disortir dari data terbesar ke terkecil

// INPUT :

const bilangan = [6, 22, 34, 15, 2, 13, 26, 57, 42, 32];

const min = Math.min(...bilangan);
const max = Math.max(...bilangan);
const dataMin = [...bilangan];
const dataMax = [...bilangan];
const minToMax = dataMin.sort((a, b) => (a < b ? -1 : 1));
const maxToMin = dataMax.sort((a, b) => (a < b ? 1 : -1));

console.log(`bilangan terkecil dari array ${bilangan} adalah ${min}`);
console.log(`bilangan terbesar dari array ${bilangan} adalah ${max}`);
console.log(
  `berikut adalah urutan bilangan dari yang terkecil sampai yang terbesar ${minToMax}`
);
console.log(
  `berikut adalah urutan bilangan dari yang terbesar sampai yang terkecil ${maxToMin}`
);

// 5. Kategori: Advanced
// Palindrome
// Buatlah program yang dapat menemukan berapa banyak sebuah kata/frasa dari sebuah string baik itu dari kiri atau kanan.

// REQUIREMENT:
// Input dari user sebanyak 2 kali berupa string dan kata/frasa yang ingin dicari.
// Input kata/frasa pencarian tidak bisa lebih panjang dibandingkan string.
// Output berupa banyaknya kata/frasa pencarian yang ditemukan dari string yang telah diberikan.
// INPUT:
// $ banananana
// $ nana
// OUTPUT:
// $ ditemukan 6 kali

function palindromeCount(input1, input2) {
  let count = 0;
  let lengthTotal = input1.length - input2.length;

  for (let i = 0; i <= lengthTotal; i++) {
    const front = input1.slice(i, i + input2.length);
    if (front === input2) {
      count += 1;
    }

    let start = lengthTotal - i;
    let end = start + input2.length;
    var back = input1.slice(start, end);
    if (back === input2) {
      count += 1;
    }
  }
  console.log(`ditemukan ${count} kata ${input2} di dalam kata ${input1}`);
}

const a = "banananana";
const b = "nana";

palindromeCount("banananana", "nana");

// 6. Kategori: Advanced
// Decimal to Binary
// Ketentuan Program :
// User menginput angka desimal
// Output berupa angka biner dari angka desimal tersebut
// Program ini hanya boleh menggunakan fungsi IF, SWITCH, FOR, WHILE
// CONTOH TAMPILAN OUTPUT :
// $ Masukkan angka desimal : 12 //user-generated input
// $ Angka Biner : 1100

function decToBin(number) {
  let result = "";
  for (let i = 0; i < number; ) {
    if (number % 2 !== 0) {
      result = "1" + result;
      //       console.log(result)
      //       console.log(number)
      //       return false;
    } else {
      result = "0" + result;
      //       console.log(number)
    }
    number = Math.floor(number / 2);
    //     console.log(number)
  }
  console.log(
    `hasil konversi angka ${number} ke bilangan biner adalah ${result}`
  );
}

decToBin(19);

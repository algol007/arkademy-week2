// 1.  Sebuah program memiliki fungsi untuk membaca array of numbers
// dan menjumlahkan seluruh member dari array tersebut sehingga
// hasilnya hanya berupa satu digit saja. Buatlah function untuk
// merealisasikan program tersebut.
// Contoh INPUT : [123, 9, 27]
// Contoh OUTPUT: 6
// Proses Function:
// 123 + 9 + 27 = 159
// 1 + 5 + 9 = 15
// 1 + 5 = 6

const data = [123, 9, 27];

function sum([...arguments]) {
  let total = 0;
  arguments.map(number => (total = total + number));
  console.log(total);
  let arguments2 = Array.from(String(total), Number);
  let total2 = 0;
  arguments2.map(number => (total2 = total2 + number));
  console.log(total2);
  let arguments3 = Array.from(String(total2), Number);
  let total3 = 0;
  arguments3.map(number => (total3 = total3 + number));
  return total3;
}

const result = sum(data);

console.log(result);

//2. Buatlah program yang memiliki parameter sebuah matriks(array 2 dimensi) dan memiliki return berupa transpose dari matriks tersebut.
// Contoh input:
// 1,2,3
// 4,5,6
// 7,8,9

// Contoh output:
// 1,4,7
// 2,5,8
// 3,6,9

let before = [
  [9, 2, 3],
  [4, 8, 6],
  [7, 8, 1]
];

function transpose(array) {
  let baris = array.length;
  let kolom = array[0].length;
  let array1 = [];
  let array2 = [];

  for (let j = 0; j < kolom; j++) {
    array1 = [];
    for (let i = 0; i < baris; i++) {
      array1.push(array[i][j]);
      console.log(array1);
    }
    array2.push(array1);
  }
  console.log(array2);
}

transpose(before);

// 3. Buatlah program yang memiliki parameter 2 buah matriks dan memiliki return berupa hasil perkalian dari kedua matriks tersebut (sertakan juga error handling untuk pelanggaran dalam peraturan perkalian matriks)
// Contoh input:
// A = [
//   [3, 4],
//   [1, 2]
// ];

// B = [
//   [7, 5],
//   [6, 4]
// ];

// Contoh output:
// AxB= [
//   [45, 31],
//   [19, 13]
// ]

let matriks1 = [
  [3, 4],
  [1, 2]
];
let matriks2 = [
  [7, 5],
  [6, 4]
];

function xMatriks(matriks1, matriks2) {
  let barisM1 = matriks1.length;
  let kolomM1 = matriks1[0].length;
  let kolomM2 = matriks2[0].length;
  let result = [];
  for (let b1 = 0; b1 < barisM1; b1++) {
    result[b1] = [];
    for (let k2 = 0; k2 < kolomM2; k2++) {
      let sum = 0;
      for (let k1 = 0; k1 < kolomM1; k1++) {
        sum += matriks1[b1][k1] * matriks2[k1][k2];
      }
      result[b1][k2] = sum;
      console.log(sum);
    }
  }
  return result;
}

let mResult = xMatriks(matriks1, matriks2);

console.log(mResult);

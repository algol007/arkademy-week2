// 1. Edit Object (spread operator)
// Sebuah daftar tentu dapat mengalami perubahan, namun belum tentu semua datanya berubah. Disediakan array of object sebagai berikut:

// Jika Tatas telah menikah dan pindah dari Jogja ke Jakarta, serta Pratama direkrut oleh Arkademy menjadi Trainer yang bertempat di Jogja, maka ubahlah object diatas menggunakan spread operator.

const data = [
  {
    name: "Tatas",
    company: "Arkademy",
    job: "Trainer",
    status: "Single",
    city: "Jogja"
  },
  {
    name: "Pratama",
    company: "Emago",
    job: "Trainer",
    status: "Single",
    city: "Jakarta"
  }
];

const data1 = data.map(data => {
  return { ...data };
});
data1.find(data => data.name == "Tatas").city = "Jakarta";
data1.find(data => data.name == "Tatas").status = "Married";
data1.find(data => data.name == "Pratama").city = "Jogja";
data1.find(data => data.name == "Pratama").company = "Arkademy";

console.log(data);
console.log(data1);

// 2. Mesin Printer
// Disediakan 2 buah array yaitu array huruf dan array perintah. Jika array perintah berisi true, maka huruf yang memiliki indeks yang sama di array huruf akan dicetak. Buatlah sebuah program untuk menampilkan output berupa huruf yang di print berdasarkan array perintah dengan parameter berupa array perintah.

const huruf = ["a", "b", "c", "d", "e", "f", "g"];
const perintah = [true, true, false, false, true, false, true];

const perintahTrue = perintah.find(perintah => perintah == true);

function isTrue(perintah, huruf) {
  const array = [];
  //   const print =
  //         huruf.map((item, index) => console.log(index))

  const perintahTrue = perintah.map(function(item, index) {
    if (item == true) {
      //       console.log(index1)
      array.push(index);
      //       console.log(perintahTrue)
    }
  });

  //   console.log(array)
  for (let j = 0; j < array.length; j++) {
    console.log(huruf[array[j]]);
  }
}

// 3. Mean, Median, Modus
// Dalam ilmu statistika, kita menggunakan mean untuk menemukan nilai rata—rata sebuah array atau kumpulan nilai, median untuk menentukan nilai tengah di array nilai, dan modus untuk menemukan nilai manakah pada array yang muncul paling banyak. Buatlah sebuah program yang dapat menghasilkan output berupa nilai mean, median dan modus dengan parameter berupa array nilai.

function mean(array) {
  let mean = 0;
  let data = array.length;
  for (let i = 0; i < data; i++) {
    mean += array[i];
  }
  console.log(`nilai rata-rata dari data ${array} adalah ${mean / data}`);
}

function median(array) {
  let median = 0;
  let data = array.length;
  array.sort();
  if (data % 2 === 0) {
    median = (array[data / 2 - 1] + array[data / 2]) / 2;
  } else {
    median = array[(data - 1) / 2];
  }
  console.log(`nilai median dari ${array} adalah ${median}`);
}

function modus(array) {
  let modus = [];
  let freq = [];
  let maxFreq = 0;

  for (let i = 0; i < array.length; i++) {
    freq[array[i]] = (freq[array[i]] || 0) + 1;
    if (freq[array[i]] > maxFreq) {
      maxFreq = freq[array[i]];
    }
  }

  for (let j = 0; j < freq.length; j++) {
    if (freq[j] == maxFreq) {
      modus.push(j);
    }
  }
  console.log(
    `angka yang paling sering muncul dari data ${array} adalah ${modus}`
  );
}

var data = [3, 5, 4, 4, 4, 1, 1, 2, 3, 6];

mean(data);
median(data);
mode(data);

// 4.  Aplikasi Perpustakaan
// Sebuah perpustakaan menyimpan data buku-bukunya dalam array of object
// (key title, author, status). Buatlah sebuah program yang dapat
// menampilkan output berdasarkan pilihan:
// a. Menampilkan status sebuah buku jika diberikan parameter
// judul buku tersebut.
// b. Menampilkan list buku yang tersedia untuk dipinjam.

const books = [
  {
    keyTitle: "Book One",
    author: "Person One",
    status: "Available"
  },
  {
    keyTitle: "Book Two",
    author: "Person Two",
    status: "Available"
  },
  {
    keyTitle: "Book Three",
    author: "Person Three",
    status: "Available"
  },
  {
    keyTitle: "Book Four",
    author: "Person Four",
    status: "Not Available"
  },
  {
    keyTitle: "Book Five",
    author: "Person Five",
    status: "Not Available"
  }
];

let isAvailable = books.filter(book => book.status == "Available");

function bookStatus(title) {
  let status = books.find(book => book.keyTitle == title).status;
  console.log(`${title} is ${status}`);
}

bookStatus("Book One");
console.log(isAvailable);

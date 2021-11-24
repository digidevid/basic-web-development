// STRUKTUR PENULISAN FUNCTION
function namaFunction1() {
	console.log('Halo Function');
}

function namaFunction2(parameter1, parameter2) {
	var total = parameter1 + parameter2;
	console.log(total);
}

var namaFunction3 = function (parameter1, parameter2) {
	var total = parameter1 + parameter2;
	return total;
};
console.log(namaFunction3(3, 4));

// -------------------------------
// -------------------------------

// PEMANGGILAN FUNCTION (sebuah function harus di panggil agar function bisa di jalankan)
function tampilkanData() {
	console.log('Halo Function');
}
tampilkanData(); // kita memanggil function 'tampilkanData'

// -------------------------------
// -------------------------------

// FUNCTION RETURN (function yang mengembalikan sebuah data/value/nilai)
function returnData() {
	return 'ini adalah function return'; // kita mengembalikan string 'ini adalah function return' sehingga function 'returnData' memiliki value, sama seperti sebuah variabel
}
console.log(returnData()); // kita menampilkan value dari function 'returnData' ke console

// contoh 2
function lakukanSuatuAksi() {
	return 'melakukan suatu aksi';
}
var newFunction = lakukanSuatuAksi(); // kita menampung value dari function 'lakukanSuatuAksi' ke dalam variabel 'newFunction'
console.log(newFunction); // menampilkan value dari 'newFunction'

// contoh 3
function lakukanSuatuAksiLagi() {
	console.log('melakukan suatu aksi lagi'); // kita tidak me return value apapun, hanya menampilkan string ke console
}
var newFunctionLagi = lakukanSuatuAksiLagi(); // kita menampung value dari function 'lakukanSuatuAksiLagi' ke dalam variabel 'newFunctionLagi'
console.log(newFunctionLagi); // output nya akan 'undefined' karena function 'lakukanSuatuAksiLagi' tidak me return value = tidak memiliki value

// -----------------------------------
// -----------------------------------

// PARAMETER & ARGUMEN FUNCTION
function hitungUmur(tahunLahir, nama) {
	var umur = 2021 - tahunLahir;
	console.log(`${nama} tahun ini berumur ${umur} tahun`); // string menggunakan template literals
} // tahunLahir dan nama adalah parameter

hitungUmur(1994, 'ibnu'); // 1994 dan 'ibnu' adalah argumen

// ------------------------------------
// ------------------------------------

// FUNCTION DALAM OBJECT
var newObj = {
	name: 'ihsan',
	age: 10,
	desc: function () {
		return `${this.name} sekarang berumur ${this.age} tahun`;
	},
};

console.log(newObj.desc());

// -------------------------------------
// -------------------------------------

// ARROW FUNCTION (tipe function yang lebih modern dan memiliki struktur lebih singkat)
var c = (a, b) => a + b;
console.log(c(2, 3));

var calcAge = (birthYear, currentYear) => {
	return currentYear - birthYear;
};
console.log(calcAge(1994, 2021));

// ------------------------------------
// ------------------------------------

// FUNCTION DALAM FUNCTION
function getDataUser() {
	console.log('successfully get user data');

	function showDataUser() {
		console.log('showing user data');
	}
	showDataUser();
}

getDataUser();

// -----------------------------------
// -----------------------------------

// CALLBACK FUNCTION (memanggil function lain di dalam function)
function calcUserAge(name, birthYear, currentYear) {
	var age = currentYear - birthYear;
	console.log(`${name} is ${age} years old this year`);

	decideAgeLevel(name, age); // memanggil function decideAgeLevel
}

function decideAgeLevel(personName, personAge) {
	var ageLevel = personAge <= 30 ? 'young' : 'old'; // ternary operator (sama seperti if else, namun lebih singkat)
	console.log(`${personName} is a ${ageLevel} person`);
}

calcUserAge('ibnu', 1994, 2021);
calcUserAge('irwan', 1964, 2021);

// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------

// LOOP

// FOR LOOP
// mengulang console log 'javascript' sebanyak 10 kali
for (x = 0; x < 10; x++) {
	console.log('javascript');
}

var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// mengulang isi dari array
for (i = 0; i < newArray.length; i = i + 2) {
	console.log(newArray[i]);
}

// -----------------------------------------------------
// -----------------------------------------------------

// FOREACH LOOP
var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// mengulang isi dari array
newArray.forEach((angka) => {
	console.log(angka);
});

var rumahSakit = [
	{
		nama: 'ibnu',
		umur: 10,
	},
	{
		nama: 'later',
		umur: 13,
	},
	{
		nama: 'wahyu',
		umur: 19,
	},
	{
		nama: 'ihsan',
		umur: 1,
	},
];

// mengulang salah satu parameter pasien
rumahSakit.forEach((pasien) => {
	console.log(pasien.nama);
});

// ---------------------------------------------------
// ---------------------------------------------------

// PR: caritau perulangan while dan do-while

// var counts = [];
// c = 0;

// for (var i = 0; i < 3; i++) {
//   counts[i] = [];
//   for (var j = 0; j < 3; j++) {
//     counts[i][j] = c;
//     c++;
//   }
// }
// console.log(counts);

// var too = 34;
// var oron1 = Math.floor(too / 10);
// var oron2 = too % 10;

// var hariu = oron1 * oron2;
// console.log(hariu);

const prompt = require("prompt-sync")();
// var arr = [];
// var n = prompt("n toog oruulna uu: ");
// var count = 0;

// for (var i = 0; i < n; i++) {
//   arr[i] = prompt("Too oruulna uu: ");
//   //   console.log(arr);
// }
// // c = 0;
// var shineArr = [];
// for (var i = 0; i < n; i++) {
//   if (arr[i] > 9999 && arr[i] < 100000) {
//     shineArr[count] = arr[i];
//     c++;
//     count++;
//   }
// }
// console.log("5 orontoi too " + count + " shirheg baina.");
// console.log(shineArr);

// N elementtei toond K toond uldegdelgui huvaagdah toog ol
var arrN = [];
var n = prompt("N element too oruulna uu: ");

var count = 0;
var k = prompt("K toog oruulna uu: ");
var arrK = [];

for (var i = 0; i < n; i++) {
  arrN[i] = Math.floor(Math.random() * 100);
  console.log(arrN);
}

for (var i = 0; i < n; i++) {
  if (arrN[i] % k == 0) {
    arrK[count] = arrN[i];
    count++;
  }
}

console.log("Ene massivt " + k + " toond huvaagdag " + count + " too bn.");
console.log(arrK);

// NxM hemjeetei massiv uusgeed, sanamsargui too duursen bol, tegsh toonii niilber ol.

var arrNxM = [];
var N = prompt("N element too oruulna uu: ");
var M = prompt("M toog oruulna uu: ");
console.log("Oruulsan massiv: " + N + "x" + M);
// arrNxM = arrNxM[N][M];

var count = 0;
j = 0;
var arr2huvaah = [];
var Hoyorthuvaagdah = 0;
var niilberHoyor = 0;

for (var i = 0; i < N; i++) {
  arrNxM[i] = [];
  for (var j = 0; j < M; j++) {
    arrNxM[i][j] = Math.floor(Math.random() * 10);
    if (arrNxM[i][j] % 2 == 0) {
      //   niilberHoyor = niilberHoyor + arrNxM[i][j];
      niilberHoyor += arrNxM[i][j];

      //   arr2huvaah.push(arrNxM[i][j]);
    }
    count++;
  }
}
console.log(arrNxM);
// console.log(arr2huvaah);
console.log(niilberHoyor);

// for(var )

// if(arrNxM[i][j] % 2 == 0)

// Hamgiin olon davtagdsan toog ol!
var arrDavtsanToo = [1, 2, 3, 2, 3, 0, 3];
urt = arrDavtsanToo.length;
count = 0;
i = 0;
j = i + 1;
console.log(urt);
for (var i = 0; i < urt; i++) {
  if (arrDavtsanToo[i] == arrDavtsanToo[j]) {
    count++;
    console.log(arrDavtsanToo[i] + " gdg too" + count + " udaa bn.");
  }
}

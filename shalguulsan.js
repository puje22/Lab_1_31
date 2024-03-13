// console.log("Хамгийн их ерөнхий хуваагч");

// var a = 17;
// var b = 2;
// var c;
// var c = b;
// b = a % b;

// while (b != 0) {
//   c = b;
//   b = a % b;
//   a = c;

//   if (a == b) {
//     console.log(a);
//     break;
//   } else {
//     console.log("Байхгүй");
//     break;
//   }
// }
// console.log(c);

// N elementtei toond K toond uldegdelgui huvaagdah toog ol
const prompt = require("prompt-sync")();
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

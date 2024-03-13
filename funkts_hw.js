// var arr1 = [3, 4, 5, 9];
// var arr2 = [4, 9, 12, 15];
// var arr = mergeArrays;

// function mergeArrays(arr1, arr2) {
//   for (var i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       continue;
//     } else {
//       arr2.push(arr1[i]);
//     }
//   }

//   return arr2;
// }

// console.log(mergeArrays(arr1, arr2));

var arr = ["javascript", "is", "programming", " ", "language"];
// longElement(arr);

// function longElement(arr) {
//   let too;
//   let urtElement;
//   too = arr[0].length;
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i.length]; j++) {
//       console.log(arr[i][j]);
//     }
//     if (arr[i].length > too) {
//       urtElement = arr[i];
//     } else {
//     }
//   }

//   return urtElement;
// }

// console.log(longElement(arr));

// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log(arr[0][0]);
//   }
// }

too = 1234567;

function swap(too) {
  var textToo = too.toString();
  var shine = [];
  if (textToo.length % 2 == 0) {
    for (i = 0; i < textToo.length; i++) {
      if (i % 2 == 0) {
        shine[i] = textToo[i + 1];
      } else {
        shine[i] = textToo[i - 1];
      }
    }
    shine = shine.join("");
    shine = Number(shine);
    return shine;
    // console.log(typeof shine);
  } else {
    var a = false;
    // return "Oron tegsh bh yostoi!";
    return a;
  }
}

console.log(swap(too));

// console.log(textToo[0]);
// console.log(textToo.length);
// let c = textToo[0];
// let b = textToo[1];
// let a = c + b;
// console.log(a);

// shine[0] = textToo[1];
// shine[1] = textToo[0];
// shine[2] = textToo[3];
// shine[3] = textToo[2];
// shine[4] = textToo[5];
// shine[5] = textToo[4];

var shagai = ["mori", "honi", "ymaa", "temee"];

var shagai1 = shagai[Math.floor(Math.random() * 4)];
var shagai2 = shagai[Math.floor(Math.random() * 4)];
var shagai3 = shagai[Math.floor(Math.random() * 4)];
var shagai4 = shagai[Math.floor(Math.random() * 4)];

let allShagai = [shagai1, shagai2, shagai3, shagai4];
console.log(allShagai);

// let set1 = [shagai1, shagai2];
// let set2 = [shagai3, shagai4];
// console.log(set1);
// console.log(set2);

// for (i = 0; i < allShagai.length; i++) {
//   if (set1.includes(set2[i])) {
//     console.log(set2[i]);
//     console.log("Durvun berkh bish");
//   } else {
//     console.log("Durvun berkh");
//   }
// }
// console.log(count);
var count = 0;
function checkDistinct(array) {
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) == i) {
      return false;
    }
  }
  return true;
}

var a = 45;
console.log(a);
function print() {
  var a = 30;
  console.log(a);
}

var tasks = [];
console.log(tasks);

function addTask(x) {
  x = x;
  complete = "No";
  tasks.push({ title: x, isComplete: complete });
}

function completeTask(a, b) {
  if (tasks.title == a) {
    tasks.title = a;
    tasks.isComplete = b;
  }
}
function displayTask(x) {
  console.log(tasks);
}

// console.log(tasks);

addTask("Ajil 2");

completeTask("Ajil 2", "Yes");
console.log(tasks);
// displayTask(tasks);

addTask("Ajil 3");
// displayTask(tasks);
console.log("Nemsnii daraa:");
console.log(tasks);

function checkpal(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] !== x[x.length - 1 - i]) {
      console.log("Pa bish");
    } else {
      console.log("Pa mun");
    }
  }
}

x = "bayab";
b = [];

for (var i = 0; i < x.length; i++) {
  b.push(x[x.length - 1 - i]);
}
b.join("");
console.log(b);

if (x == b) {
  console.log("Pa bish");
} else {
  console.log("Pa mun");
}
// b.join("");
// console.log(b);

// checkpal("bayartai");
// // 01234;
// // bayar;

// // bayab;
// // b[o] = b[4];
// // b[1] = b[3];

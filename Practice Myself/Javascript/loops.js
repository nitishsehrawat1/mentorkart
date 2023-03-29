// for loop
let sum = 1;
let n = prompt("enter your number");
for (let i = 1; i < n; ++i) {
  sum *= i + 1;
  console.log(i + 1, "+");
}
console.log(sum);

// for in loop
let obj = {
  harry: 90,
  me: 34,
  you: 34,
};
for (let a in obj) {
  console.log(a, obj[a]);
}

// for of loop
for (let b of "Nitish") {
  console.log(b);
}

function nmd(nm) {
  return "#" + nm.toUpperCase() + "$";
}

const anFn = function (nm) {
  return "#" + nm.toUpperCase() + "$";
};

console.log(nmd("abc"));

console.log(anFn("abc"));

console.log(anFn);
console.log(nmd);

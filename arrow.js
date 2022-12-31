function mkSqr(n) {
  // traditional way of function representation
  return n * n;
}
const sq1 = mkSqr(10);
console.log(sq1);

const sq2 = function (n) {
  //anonymous function
  return n * n;
};

const ans = sq2(15);

console.log(ans);

const arrow1 = (n) => {
  //arrow function
  return n * n;
};

const answer = arrow1(17);

console.log(answer);

const arrow2 = (n) => n * n;

const me = arrow2(13);

console.log(me);

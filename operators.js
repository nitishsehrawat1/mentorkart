const a = 10;
const b = 30;
const c = 4;
let x = 20;

console.log('Equality ' + (a == b));
console.log('NOT Equal ' + (a != b));
console.log('GT ' + (a > b));
console.log('GTE ' + (a >= b));
console.log('LT ' + (a < b));
console.log('LTE ' + (a <= b));

console.log('Subtract ' + (a - b));
console.log('Add ' + (a + b));
console.log('Post Inc ' + (x++)); // increment x = x+1  Post Increment
console.log('Pre Inc ' + (x++)); // increment x = x-1  Pre Increment
console.log('Exponent ' + (a**c))

console.log('bitwise And ' + (a & 1))
console.log('bitwise OR ' + (a | 1))

console.log('Shift operators ' + (a >> 1)) // right shift
console.log('Shift operators ' + (a << 1)) //   left shift

console.log('Logical And 1 : ' + (10 && 0))
console.log('Logical And 0 : ' + (10 && 0))
console.log('Logical Or 1 :  ' + (10 ||  0))
console.log('Logical Or 0 : ' + (10 || 0 ))


const st1 = 'SUCCESS'
const st2 = 'FAIL'

const result = (a < 20) ? "Success" : "Fail"  

console.log('Ternary Operator  ' + result)

const nums = [ 1, 2, 3, 4, 5, 6, 7]

console.log(  'Relational Array In : ' + (6 in nums))

const obj = {
    1 : 'abc',
    2 : 'xyz',
   10 : 'jkl'
}

console.log( 'Relational Object In : ' + (a in obj))
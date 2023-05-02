function SumOf(x, y) {
    console.log("Done")
    return (x + y);
}

const sum = ()=>{
    return (a+b)
}

const hello = ()=>{
    console.log("Hello world")
    return "hii"
}

let a = 2;
let b = 25;
let c = 34;
let d = hello();

console.log("Sum of a and b ", SumOf(a, b)) ;
console.log("Sum of b and c ", SumOf(c, b)) ;
console.log("Sum of a and c ", SumOf(a, c)) ;
console.log(sum(a, b)) ;

hello()
console.log(d)

const helloo = (a , b)=>{
    console.log("Hello world")
    return ((a+b)/2)
}
console.log(helloo(5,10))
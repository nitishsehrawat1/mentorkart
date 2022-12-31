function makeSqrTen(num) {
    // const sqr = num * num + 10;
    // return sqr
    return  (num * num + 10)
}
console.log(makeSqrTen(10))

const resu = makeSqrTen(10)
divide(resu)

function divide(result) {
    const fnrslt = result / 45;
    const statue = (fnrslt > 6) ? 'Normal ' : 'Bad Data';
   console.log(statue)
}

// aplicativo de frases

// function statement
function createPhrases(){
    console.log('Estudar é bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}

// execute, run, call, invoke
createPhrases()

console.log("fim do programa")

// function expression / function anonymous
const sum = function(n1,n2){
    //console.log(n1+n2)
    return n1+n2
}

sum (2,3) //  arguments

// concatenado
console.log('a soma é '+ sum(2,3))

// interpolado
console.log(`a soma é ${sum(2,3)}`)

// arrow function
const sum2 = (n1,n2) =>{
    //console.log(n1+n2)
    return n1+n2
}
sum2 (2,3) //  arguments
console.log('a soma af é '+ sum2(2,3))

// if ternario
// condicao ? casosim : casonao
var nota
var conceito

function getScore(nota){
    switch (true){
        case (nota>=90):
            conceito = "A"
            break
        case (nota>=80):
            conceito = "B"
            break
        case (nota>=70):
            conceito = "C"
            break
        case (nota>=60):
            conceito = "D"
            break
        case (nota<60):
           conceito = "F"
           break
        default:
            conceito = "Nota inválida"
            break
        }
    console.log(`A nota é ${nota}`)
    console.log(`O conceito é ${conceito}`)
}


getScore(55)
getScore(65)
getScore(75)
getScore(85)
getScore(95)

// var teste

// fetch(`http://localhost:3000/${nota}`, 
// {
// method: 'GET'
// }).then(res => res.text()).then(res => {
//     console.log(res);
// })


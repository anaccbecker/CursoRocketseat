console.log('solicitar carona');

// Variável para aceitar ou não a carona

let aceitar = false

// Criando novo objeto de tipo Promise e atribuindo à variável promessa
// Dentro desse objeto tem uma função com dois argumentos: resolve e reject
const promessa = new Promise ((resolve, reject) =>{
    if(aceitar == true){
        return resolve('carro chegou');
    } else{
        return reject('cancelado')
    }
})

console.log('aguardando...')

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('fim'))



console.log(promessa);
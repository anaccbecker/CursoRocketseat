// importando o módulo
const https = require('https')

// atribuindo o site para a variável API
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

// recebe dados do website e retorna o código de status
https.get(API, res=> {
    console.log(res.statusCode)
})

 console.log('conectando API...')
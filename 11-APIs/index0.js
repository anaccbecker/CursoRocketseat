// Carregamento da framework express
const express = require('express')

const app = express()

// Criação do server
app.listen('3000')


// Criar um conteúdo
// app.route('/').get((req,res) => res.send("hello"))
// app.route('/sobre').get((req,res) => res.send("sobre"))


// middleware
app.use(express.json())

//requisição com post
//app.route('/').post((req,res) => console.log(req.body))

//app.route('/').post((req,res) => res.send(req.body))

// requisição com put
let author = "Ana"
app.route('/').put((req,res) => {
    author = req.body.author
    res.send(author)
})

app.route('/').get((req,res) => res.send(author))

//deletando
app.route('/:identificador').delete((req,res) => {

    res.send(req.params.identificador)
})


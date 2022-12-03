// Importando módulo express responsável por criar um servidor de tudo que a gente está construindo dentro do navegador (renderiza todo o javascript e mostra no navegador)
const express = require('express');

// Instanciando o express e guardando na variável app
const app = express();

// Set é um método que existe dentro do express
// View engine é o tipo de ferramenta usada para ver o html
// ejs é a ferramenta em uso agora 
app.set("view engine", "ejs");

// Criando uma rota ( método get)
app.get("/", function(req, res){
    const items = [
        {
            title:"E",
            message: "mbedded"
        },
        {
            title:"J",
            message: "ava"
        },
        {
            title:"S",
            message: "cript"
        }
    ];

    const subtitle = "subtítulo";

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

// Criando outra rota ( método get)
app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando");


// Comandos no terminal:

// npm install ejs
// npm install express
// node server.js
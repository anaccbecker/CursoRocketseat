// exemplo API imagem

const express = require('express')
const axios = require('axios')
const app = express()
app.listen('3000')
app.route('/').get((rec, res) => {
    axios.get("https://api.github.com/users/anaccbecker")
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.log(error))
})
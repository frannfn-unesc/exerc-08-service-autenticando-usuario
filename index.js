const express = require('express')
const app = express()
const PORTA = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', function(req, res){
    console.log("Olá Mundo")
    res.sendFile("./public/login.html")
})

app.listen(PORTA, function(){
    console.log(`Servidor iniciado na porta ${PORTA}`)
})
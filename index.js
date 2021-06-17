const express = require('express')
const app = express()
const PORTA = 8080

app.listen(PORTA, function(){
    console.log(`Servidor iniciado na porta ${PORTA}`)
})

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', function(req, res){
    res.sendFile(__dirname + "/public/login.html")
})

app.use('/login', function(req, res){
    res.sendFile(__dirname + "/public/login.html")
})

app.use("/profile", function(req, res) {
    res.sendFile(__dirname + "/public/profile.html");
})

app.use('/auth', function(req, res){
    var usuario = "Daiana"
    var senha = "12345"

    if(req.body.usuario == usuario && req.body.senha == senha){
        res.redirect(__dirname + "/public/profile.html")
    } else {
        res.redirect(__dirname + "/public/login.html")
    }
})

app.use(function(req, res){
    res.status(404);
    res.sendFile(__dirname + "/public/erro.html");
});
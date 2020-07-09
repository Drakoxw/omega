const express = require('express')
const app = new express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
//const io = require('socket.io')(http)
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
})


io.on('connection',() => {
    io.set('transports',['xhr-polling'])
    console.log("Alguien se ha conectado con Socket")
    socket.on('stream',function(image){
        socket.broadcast.emit('stream', image)
    })
})

http.listen(port, function(){
    console.log('Servidor escuchando en: %s', port)
})
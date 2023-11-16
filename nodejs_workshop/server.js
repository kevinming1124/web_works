//引入 express 模組，建立物件
const { Socket } = require('engine.io');
const express = require('express'); 
//宣告 app 為 express function , 透過 express() 建立 applicaton 物件
const app = express();
//引入 http 模組，建立物件
const http = require('http'); 
//建立 http server，為 app 掛載上 http 模組所提供的屬性和方法
const server = http.createServer(app); 
const port = 5001; 

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/css', express.static('css'));

const { Server } = require('socket.io');
const io = new Server(server);

let onlineCount = 0;

io.on('connection', (socket) =>{
    onlineCount++;
    socket.on('disconnect', () => {
        onlineCount = (onlineCount <= 0) ? 0 : onlineCount -= 1;
        console.log('user disconnected', onlineCount, 'online')
    });

    socket.on('myMessage', (msg) => {
        io.emit('allMessage', msg);
        console.log(msg);
    })
})

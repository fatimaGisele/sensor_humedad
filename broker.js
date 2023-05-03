const mosca = require('mosca');

const broker = new mosca.Server({
    port: 8000,
});

broker.on('ready', ()=>{
    console.log('holis');
});

broker.on('clientConnected',()=>{
    console.log('cliente conectado')
});

broker.on('published', (packet)=>{
    console.log(packet.payload.toString())
})
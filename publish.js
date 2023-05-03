const mqtt = require('mqtt');
const serialport = require('serialport').SerialPort;
const {ReadlineParser} = require('@serialport/parser-readline');


const port = new serialport({
    path:'COM3',
    baudRate: 9600,
}, true);

serialport.list().then((data) => console.log(data)).catch(err => console.log(err));

//port.open();

const parser = port.pipe(new ReadlineParser({delimiter:'\n'}))

const published = mqtt.connect('mqtt://localhost:8000');

published.on('connect', ()=>{
    parser.on('data',(data)=>{
        published.publish('humedad', data);
    })
})
const { error } = require('console');
const express = require('express');
const mysql = require('mysql');
const util = require('util');

const app = express();
const port = 3306;

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sensor_humedad'
});

db.connect((error)=>{
    if(error){
        console.log('error X( ');
        throw error;
    }
    console.log('conexion establecida');
})

//const q = util.promisify(db.query).bind(db);
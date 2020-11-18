const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const url = 'mongodb://localhost:27017/misVotos';

const app = express();

mongoose.connect(url, {useNewUrlParser: true})
const conexion = mongoose.connection;

conexion.on('open', () =>{
    console.log('Conectado a la Base de Datos ....');
});

app.use(cors());
app.use(express.json());

const votosRouter = require('./routes/votos');
const { Router } = require('express');

app.use('/votos', votosRouter);


app.listen(3000, () =>{
    console.log('Servidor funcionando');
})
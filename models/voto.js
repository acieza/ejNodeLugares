const mongoose = require('mongoose');

const votoSchema = new mongoose.Schema({
    imagen: {
        type:String,
        required:true
    },
    titulo: {
        type:String,
        required:true
    },
    detalle: {
        type:String,
        required:true
    },
    likes: {
        type:Number,
        required:true
    }
})


module.exports = mongoose.model('Voto', votoSchema);
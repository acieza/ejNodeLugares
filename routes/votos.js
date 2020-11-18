const express = require('express');
const router = express.Router();
const Voto = require('../models/voto');

router.get('/', async (req,res) =>{
    try{
        const misVotos = await Voto.find();
       res.json(misVotos);
    }catch{
        res.send("Error " + err);
    }
})

router.get('/:id', async(req,res) =>{
    try{
        const miVoto = await Voto.findById(req.params.id);
         res.json(miVoto);
    }catch{
        res.send("Error " + err);
    }
   
})

router.post('/', async(req,res) =>{
    const voto = new Voto({
        imagen: req.body.imagen,
        titulo: req.body.titulo,
        detalle: req.body.detalle,
        likes: req.body.likes
    })

    try{
        const votoUno = await voto.save();
        res.json(votoUno);
    }catch{
        res.send("Error " + err);
    }
})

router.put('/:id', async(req,res) =>{
    try{
        const miVoto = await Voto.findById(req.params.id);
        miVoto.imagen = req.body.imagen
        miVoto.titulo = req.body.titulo
        miVoto.detalle = req.body.detalle
        miVoto.likes = req.body.likes

        const votoUno = await miVoto.save();
        res.json(votoUno);
    }catch{
        res.send("Error " + err);
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const miVoto = await Voto.findById(req.params.id);
        const v1 = await miVoto.deleteOne();
        res.json(v1);
    }catch{
        res.send("Error " + err);//Error en la contante
    }

})


module.exports = router;
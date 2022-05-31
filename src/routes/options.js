const express = require("express");
const router = express.Router();
const schema = require("../models/Task");

//agregar
router.post(("/options"), async(req, res)=>{
    const saved = schema(req.body);
    await saved.save()
      .then((data) => res.json(data))
      .catch((err) => res.json({message : err}));
})
//ver
router.get(("/options"), async(req, res) =>{
    await schema.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//ver por id
router.get(("/options/:id"), async(req, res) =>{
    const {id} = req.params;
    await schema.findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//actualizar
router.put(("/options/:id"), async(req, res) =>{
    const {id} = req.params;
    const {titleLink, link} = req.body;
    await schema.updateOne({_id: id},{ $set: {titleLink, link}})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//eliminar
router.delete(("/options/:id"), async(req, res) =>{
    const {id} = req.params;
    await schema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})

module.exports = router
const express = require("express")
const router = express.Router()
const schema = require("../models/Task")
const cors = require("cors")
const task = schema.find()

//url: http://localhost:4000/api/options
//llamado cors
cors()

//agregar
router.post(("/options"), (req, res)=>{
      const saved = schema(req.body)
      saved.save()
      .then((data) => res.json(data))
      .catch((err) => res.json({message : err}))
})
//ver
router.get(("/options"), (req, res) =>{
    schema.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}))
})
//ver por id
router.get(("/options/:id"), (req, res) =>{
    const {id} = req.params
    schema.findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}))
})
//actualizar
router.put(("/options/:id"), (req, res) =>{
    const {id} = req.params
    const {titleLink, link} = req.body
    schema.updateOne({_id: id},{ $set: {titleLink, link}})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}))
})
//eliminar
router.delete(("/options/:id"), (req, res) =>{
    const {id} = req.params
    schema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}))
})

module.exports = router
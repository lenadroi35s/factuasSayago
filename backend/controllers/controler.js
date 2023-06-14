const model = require("../models/schema")


// Crear
const generarFactura = async(req,res)=>{
    try{
        const clientes = await model.create(req.body)
        return res.status(200).send({
            message: clientes,
        })
    }catch(err){
        return res.status(400).send({
            message: err
        })
    }
}

// Obtener
const retornaFacturas = async(_req,res)=>{
    try{
        const clientes = await model.find()
        return res.status(200).send({
            message: clientes
        })
    }catch(err){
        return res.status(500).send({
            message: err
        })
    }
}

// Editar
const editarFactura = async(req,res)=>{
    try{
        const cliente = await model.updateOne({_id: req.params._id},{...req.body})
        return res.status(200).send({
            message: cliente
        })
    }catch(err){
        return res.status(304).send({
            message: err
        })
    }
}

// Borrar
const borrarFactura = async(req,res) =>{
    try{
        const cliente = await model.deleteOne({_id: req.params._id})
        return res.status(200).send({
            message: cliente
        })    
    }catch(err){
        return res.status(400).send({
            message: err
        })
    }
}

//Obtener por id
const retornarFacturaById = async(req,res) =>{
    try{
        const cliente = await model.findById({_id: req.params._id}, req.body)
        return res.status(200).send({
            message: cliente
        })
    }catch(err){
        return res.status(500).send({
            message: err
        })
    }
}


module.exports = {generarFactura, retornaFacturas, editarFactura, borrarFactura, retornarFacturaById}
const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    cliente: {
        tipo: {type: String, required: true},
        apellido: {type: String, required: true},
        nombre: {type: String, required: true},
        ciudad: {type: String, required: true},
        cedula: {type: String, required:true, maxLength:10, minLength:10}
    },
    tipodepago: {type: String, required: true},
    item: {type: [Object], required: true},
    nroFactura: {type: String, required: true},
    intereses: {type: [String], required: true}   
},
{ timestamps: { createdAt: 'fechaEmision' }})

const model = mongoose.model("factura",schema,"factura")

module.exports = model
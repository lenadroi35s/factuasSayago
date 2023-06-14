const express = require("express")
const { retornaFacturas, generarFactura, editarFactura, borrarFactura, retornarFacturaById } = require("../controllers/controler")

const routerFacturas= express.Router()

routerFacturas.get("/facturas",retornaFacturas)
routerFacturas.post("/facturar",generarFactura)
routerFacturas.put("/factura/:_id",editarFactura)
routerFacturas.delete("/factura/:_id",borrarFactura)
routerFacturas.get("/factura/:_id",retornarFacturaById)


module.exports = routerFacturas
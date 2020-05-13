const express= require('express')

const api= express.Router();
/* ESTE METODO ME PERMITE CONFIGURAR LAS RUTAS */
const productoControl=require('../control/productoControl')
/*IMPORTAMOS O REQUERIMOS EL CONTROL*/

api.post('/mercado',productoControl.crearProducto)
/* creaos la ruta de creacion*/
api.get('/',productoControl.obtenerProducto);
/*creamos la ruta de creacion*/
module.exports= api;
/* EXPORTAMOS LAS RUTAS PARA QUE PUEDAN SER UTLIZADAS EN NUESTRO

*/


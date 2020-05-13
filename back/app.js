const express= require('express')
/* REQUERIMOS EXPRESS*/

const app= express();
/* CONVERTIMOS EXPRESS EN UN OBJETO*/


const productoRutas=require('./rutas/productosRutas');
/* REQUERIMOS EL MODILO RUTAS */

/* MIDDLEWARE 
Logica de intercambio de infromacion entre app*/
app.use(express.json());
app.use('/api',productoRutas);
/* CREAMOS LA RUTA PARA ACCEDER A NUESTRA API */

module.exports= app;
/* EXPORTAMOS EL MODULO CON  LA LOGICA DE EXPRESS */



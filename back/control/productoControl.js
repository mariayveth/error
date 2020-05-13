const Producto=require('../modelos/productos')
/*,TRAIGO EL MODELO DE BASE DE BD*/

function crearProducto(req,res){
    var producto= new Producto();
    /* creamos la instacia donde accedemos al modelodel producto 
    ACCEDEMOS A CADA */
     var parametros= req.body;

     /* contiene los parametros que se envian desde el cliente como parte de
     una solicitud */

     producto.nombre=parametros.nombre;
     producto.marca=parametros.marca;
     producto.precio=parametros.precio;
     producto.unidades=parametros.unidades;
     /* GUARDAR CADA PROPIEDAD EN EL JSON*/

     producto.save((err,ProductoNuevo)=>{
       if (err){
           res.status(500).send( {message:"ERROR EN EL SERVIDOR"});
       }else{
           if(!ProductoNuevo){
               res.status(200).send({message:"NO FUE POSIBLE REALIZAR REGISTRO"})
           }
           else{
               res.status(200).send({
                   status: 'Producto creado',
                   producto:ProductoNuevo
               })
           }
       }
     }
    
     )   
}
function obtenerProducto(req,res){
    Producto.find((err,productosEncontrados)=>{
        /* METODO PARA BUSCAR DENTRO DE LA BD*/
        if (err){
            res.status(500).send( {message:"ERROR EN EL SERVIDOR"});
        }else{
            if(!ProductosEncontrados){
                res.status(200).send({message:"NO FUE POSIBLE REALIZAR REGISTRO"})
            }
            else{
                res.status(200).send({
                    status: 'Producto encontados',
                     producto: productosEncontrados
    
                })
            }
        }
      }
     
        
    )

    
}   
module.exports={
    crearProducto,
    obtenerProducto
/* AQUI LLAMAMOS LAS FUINCIONES PARA EXPORTARLAS Y PODER USAR EN NUESTRA RUTAS*/
}
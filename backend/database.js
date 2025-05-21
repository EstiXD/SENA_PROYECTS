/** Requerir un modulo que se conecte a mongodb, por eso necesitamos a mongoose, 
 * debemos decirle a express que se conecte a mongodb por lo que necesitamos
 * un modulo y que tambien sirva para modelar los datos  */

const mongoose = require('mongoose'); // Se requiere el módulo y se guarda en la constante

const URI = 'mongodb://localhost:27017/empleados';// defino la direcion de la conexion de la bd en una constante

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))// se utiliza una promesa para obtener 
                                            //informacion de la BD, queremos saber si se conecta
    .catch(err => console.error(err));


module.exports = mongoose;// de esta manera la constante moogose me devuelve la conexión




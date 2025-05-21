/** 
 * Requerimos mongoose, lo utilizaremos para definir los esquemas de datos, no para la conexión
 * y empezamos a modelar los datos de los empleados, como nombre, cargo u otra cosas
 * mogoose le dice a mongodb como va a ser o lucir la estructura de empleados
 */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmpleadoSchema = new Schema({
    name: {type:String, require:true},
    position: {type:String, require:true},
    office: {type:String, require:true},
    salary: {type:Number, require:true},
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);// Para utilizar este archivo en otras partes de la aplicación

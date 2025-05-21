/**
 * vamos a colocar el controlador como un objeto y luego exportamos ese objeto
 * se require primero el modelo empleado
 */

const Empleado = require('../models/empleado');

const empleadoCtrl = {};

// defino los métodos

empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);                        // no hemos creado la bd, pero cuando guardemos un dato ahí 
}                                               //se crea la BD, como toman tiempo las respuestas con JS hay 
                                                //dos maneras de trabajar, una de ellas es con la funcion callback o mejor son
                                                //las promesas con el then, pero por suerte en las ultimas versiones de JS se 
                                                //pueden utilizar async y await 



empleadoCtrl.createEmpleados = async (req, res) => { // se aplica nuevamente la función async
   const empleado = new Empleado(req.body);
   await empleado.save();                              // aplicamos await, porque se sabe que va demorar un poco el proceso 
   //console.log(empleado);                            // de guardar los datos
   res.json({
       'status': 'Empleado guardado'
   });
   //console.log(req.body);
   //res.json('recibido');
}

empleadoCtrl.getUnicoEmpleado = async (req, res) => {
    //console.log(req.params.id);
    const empleadoUnico = await Empleado.findById(req.params.id); // es un método que toma algo de tiempo por eso await
    res.json(empleadoUnico);
}

empleadoCtrl.editarEmpleado = async (req, res) =>  {
    const { id } = req.params; // otra forma de escribir que quiero capturar el id del usuario o empleado que quiero actualizar
    const emepleadoEdit = {  // Pasamos los datos traidos del cliente
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary 
    };
    await Empleado.findByIdAndUpdate(id, {$set: emepleadoEdit}, {new:  true}); // Se utiliza el método set para modificar los datos 
    res.json({status: 'Empleado Actualizado'});
}

empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status: 'Empleado Eliminado'});
}


//exporto el módulo
module.exports = empleadoCtrl;



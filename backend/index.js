const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express(); // la constante app tendra ahora todo el funcionamiento del servidor

const { mongoose } = require('./database'); // no quiero todo el archivo sino la conexión

/**
 * Creamos una REST API, es la manera de decirle al servidor que reciba y envie datos
 */

// Configuraciones

app.set('port', process.env.PORT || 3000); // el set es para crear una variable que va a ser accedida desde cualquier parte de la aplicación 
                        //(nombre var, valor)
                        // PROCESSS ES PORQUE CUANDO SE DESPLIEGUE LA APP, NO VOY A TENRR LA OPCION DE 
                        //DEFINIR EL PUERTO, SINO QUE EL MISMO SERVICIO DE LA NUBE NOS VA A DAR UN PUERTO
                        //UTILIZA EL SERVICIO QUE TE DE LA NUBE, EN EL CASO NO EXISTA UTILIZA EL PUERTO 3000 POR LA CONDICION OR QUE SE LE DA

// Middlewares se encarga de tener unas funciones encargadas de procesar los datos, cuando pidamos datos o le estemos enviado datos
// al servidor, de alguna manera el servidor debe entender los datos y es por eso que se necesita algun tipo de conversion, necesitamos modulos

app.use(morgan('dev')); // como queremos ver los mensajes en consola, CADA VEZ QUE LLEGUE UNA PETICION PASARA PRIMERO POR ESTA FUNCION
//NECESITAMOS CONFIGURAR EL SERVIDOR PARA QUE ENTIENDA FORMATO JSON, LA RAZON ES QUE ANGULAR CUANDO TOME TOD LOS DATOS USUARIOS LO VA 
// ENVIAR FORMATO JSON POR lo que es importante que el servidor tambien este preparado para entender ese formato. Por lo que también
// vamos a utilizar un middleware.express.json

app.use(express.json()); // método que ayuda a convertir el codigo o entenderlo para que el servidor pueda entenderlo.

app.use(cors({origin: 'http://localhost:4200'})); // método para comunicar con el cliente

// rutas de nuestro servidor

app.use('/api/empleados',require('./routes/empleado.routes'));

   

// Iniciando el servidor
app.listen(app.get('port'), () => {// esta es una mejor manera de configurar el puerto
    console.log('server activo en el puerto', app.get('port'));
}); //vamos a poner a escuchar al servidor en el puerto 3000 y le adicionamos un mensaje de salida




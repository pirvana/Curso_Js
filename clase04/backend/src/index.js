require('dotenv').config(); //esto sirve para leer el archivo .env
const express = require('express'); //framwork de JavaScript
const morgan = require('morgan'); // Morgan se utiliza para registrar los detalles de la solicitudMorgan se utiliza para registrar los detalles de la solicitud

//inicializaciones
const app = express();
require('./database')

//archivos staticos

//configuraciones
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routers
app.use('/api/tareas', require('./routes/tareas.routes')); //esto es nuestro end point de tareas


//iniciamos el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});

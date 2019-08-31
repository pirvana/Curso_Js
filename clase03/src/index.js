const express = require('express');
const morgan = require('morgan');

//inicializaciones
const app = express();

//configuraciones
app.set('port', 4000);

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routers
app.use('/api/tareas', require('./routes/tareas.routes')); //esto es nuestro end point de tareas


//iniciamos el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});

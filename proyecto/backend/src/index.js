require('dotenv').config(); //esto sirve para leer el archivo .env
const express = require('express'); //framwork de JavaScript
const morgan = require('morgan'); // Morgan se utiliza para registrar los detalles de la solicitudMorgan se utiliza para registrar los detalles de la solicitud
const path = require('path');
const SocketIo = require('socket.io');
const cors = require('cors')
const axios = require('axios')

//inicializaciones
const app = express();
require('./database')


//configuraciones
app.set('port', process.env.PORT || 4000);

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routers
app.use('/api/productos', require('./routes/productos.routes')); //esto es nuestro end point de tareas
app.use('/api/compras', require('./routes/compras.routes'));

//iniciamos el servidor
const server = app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});

const io = SocketIo(server);


io.on('connection', (socket) => {
    socket.on('fetchProductos', async () =>{
        try {
            const res = await axios.get('http://localhost:4000/api/productos')
            await socket.emit('Productos', res.data)
        } catch (error) {
            console.log('Error')
        }
    });
});
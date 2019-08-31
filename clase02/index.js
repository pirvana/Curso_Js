const express = require('express');

const app = express();

//settings
app.set('port', 3000);

//starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})

//middlewares
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Leyendo recursos'
    });
})

app.get('/:id', (req, res) => {     // esto sirve para leer un recurso
    res.json({
        message: 'Leyendo un recurso'
    })
})

app.post('/', (req, res) => {       // esto sirve para crear un recurso
    //res.send --> envia al navegdor
    res.json(req.body)
})

app.delete('/:id', (req, res) => {   // esto sirve para eliminar un recurso
    res.json({
        message: 'Eliminando un recurso',
        id_recurso: req.params.id
    })
})

app.put('/:id', (req, res) => {    // esto sirve para actualizar un recurso
    res.json({
        message: 'Actualzando un recurso',
        id_recurso: req.params.id,
        data: req.body
    })
})
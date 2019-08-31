const tareaController = {};

tareaController.getTareas = (req, res) => {
    res.json({
        message: 'Listando Tareas'
    })
};

tareaController.getTarea = (req, res) => {
    res.json({
        message: 'Listando Tarea'
    })
};

tareaController.createTarea = (req, res) => {

    res.json({
        message: 'Creando Tarea',
        data: req.body
    })
};

tareaController.updateTarea = (req, res) => {
    res.json({
        message: 'Actualizando Tarea',
        idTarea: req.params.id,
        data: req.body
    })
};

tareaController.deleteTarea = (req, res) => {
    res.json({
        message: 'Borrando Tarea',
        idTarea: req.params.id
    })
};


module.exports = tareaController;
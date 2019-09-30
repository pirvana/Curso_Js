const tareaController = {};
const TareaModel = require('../models/Tarea');

tareaController.getTareas = async(req, res) => {
    try {
        const tareas = await TareaModel.find();
        res.json(tareas);        
    } catch (error) {
        res.json({
            success: false,
            message: 'Ha ocurrido un error' //personalizando el error
        })
        //console.log(error)// para lanzar el error tal cual
    }
};

tareaController.getTarea = async(req, res) => {
    try {
        const tarea = await TareaModel.findById(req.params.id)
        res.json(tarea);
    } catch (error) {
        res.json({
            success: false,
            message: 'Ha ocurrido un error' //personalizando el error
        })
    }
};

tareaController.createTarea = async(req, res) =>{
    const {title, description} = req.body;
    if (!title){
        return res.json({
            success: false,
            message: 'El titulo no puede estar vacio'
        });
    }

    if (!description){
        return res.json({
            success: false,
            message: 'La descripcion no puede estar vacia'
        });
    }

    const newTarea = new TareaModel({
        title,
        description
    });

    try {
        await newTarea.save();
        res.json({
            success: true,
            message: 'Tarea ha sido creada'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Ha ocurrido un error al crear la tarea'
        });
    }
};

tareaController.updateTarea = async(req, res) => {
    try {
        await TareaModel.findByIdAndUpdate({_id: req.params.id},req.body);
        res.json({
            success: true,
            message: 'Se ha actualizado correctamente' //personalizando el error
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Ha ocurrido un error' //personalizando el error
        })}
};

tareaController.deleteTarea = async(req, res) => {
    try {
        await TareaModel.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message: 'Tarea Eliminada'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Ha ocurrido un error' //personalizando el error
        })
    }
    res.json({
        message: 'Borrando Tarea',
        idTarea: req.params.id
    })
};


module.exports = tareaController;
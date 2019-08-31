async function requestHandler(req, res) {
    try {
        const user = await User.findById(req.userId); //consultamos un usuario
        const tasks = await Task.findById(user.taskId); //recuperamos sus tareas
        tasks.completed = true; //actualizamos una propiedad
        await tasks.save(); //guardamos
        return res.send('Tasks completed'); //retornamos al navegador un mensaje
    } catch (error) {
        return res.send(error);
    }
}
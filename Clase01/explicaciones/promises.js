function requestHandler(req, res){
    User.findById(req.userId)
        .then(function(user){ //creamos una promesa que va a manejar las peticiones
            return Task.findById(user.taskId); //retorna las tareas del usuario
        })
        .then(function(tasks){
            tasks.completed = true; //actualiza su propiedad a true
            return tasks.save(); //guarda en bd
        })
        .then(function(){
            return res.send('Tasks completed'); //retorna un mensaje al navegador
        })
        .catch(function(errors){
            return res.send(errors);
        });
}
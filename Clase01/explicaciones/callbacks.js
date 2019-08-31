function requestHandler(req, res){
    User.findById(req.userId, function(err, user){ //consultamos un usuario
        if(err){
            return res.send(err);
        }else{
            Task.findById(user.taksId, function(err, tasks){ //recuperamos sus tareas
                if(err){
                    return res.send(err);
                }else{
                    tasks.completed = true; //actualizamos una propiedad
                    tasks.save(function(err){ //guardamos
                        if(err){
                            return res.send(err);
                        }else{
                            return res.send('Tasks completed'); //retornamos un mensaje al navegador
                        }
                    });
                }
            });
        }
    });
}
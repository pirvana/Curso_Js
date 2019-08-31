const {Router} = require('express');
const router = Router();

const {createTarea,deleteTarea,getTarea,getTareas,updateTarea} = require('../controllers/tareas.controller');

//rest api tareas

router.get('/', getTareas);
router.get('/:id', getTarea);
router.post('/', createTarea);
router.put('/:id', updateTarea);
router.delete('/:id', deleteTarea);


module.exports = router;
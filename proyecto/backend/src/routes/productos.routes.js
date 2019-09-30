const {Router} = require('express');
const router = Router();

const {createProducto,getProducto,getProductos,updateProducto, deleteProducto} = require('../controllers/productos.controller');

//rest api tareas

router.get('/', getProductos);
router.get('/:id', getProducto);
router.post('/', createProducto);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);

module.exports = router;
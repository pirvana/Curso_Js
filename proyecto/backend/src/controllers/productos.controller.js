const ProductoController = {};
const ProductoModel = require('../models/Producto');

ProductoController.getProducto = async(req, res) => {
    try {
        const producto = await ProductoModel.findById(req.params.id);
        res.json(producto);
    } catch (error) {
        req.json({
            success: false,
            message: "no se pudo obtener el producto"
        });
    }
};

ProductoController.getProductos = async(req, res) => {
    try {
        const productos = await ProductoModel.find();
        res.json(productos);
    } catch (error) {
        req.json({
            success: false,
            message: "no se pudieron obtener los productos"
        });
    }
};

ProductoController.createProducto = async(req, res) => {
    const {nombre, precio, stock} = req.body;

    if (!nombre) {
        return res.json({
            success: false,
            message: 'El nombre no puede estar vacio'
        });
    }
    if (!precio) {
        return res.json({
            success: false,
            message: 'El precio no puede estar vacio'
        });
    }
    if (!stock) {
        return res.json({
            success: false,
            message: 'El stock no puede estar vacio'
        });
    }

    try {
        const newProducto = new ProductoModel({
            nombre,
            precio,
            stock
        });
        res.json({
            success: true,
            message: 'Producto creado'
        })
        await newProducto.save();
    } catch (error) {
        res.json({
        success: false,
        message: 'no se pudo crear el producto'
        });
    }
};

ProductoController.updateProducto = async(req, res) => {
    try {
        await ProductoModel.findByIdAndUpdate({_id: req.params.id}, req.body);
        res.json({
            success: true,
            message: 'Producto actualizado'
        });
    } catch (error) {
        res.json({
        success: false,
        message: 'No se pudo actualizar el producto'
        });
    }
};

ProductoController.deleteProducto = async(req, res) => {
    try {
        await ProductoModel.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: 'Producto eliminado'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'No se pudo eliminar el producto'
        })
    }
};


module.exports = ProductoController;
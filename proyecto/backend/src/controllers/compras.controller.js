const CompraModel = require('../models/Compra');
const ProductoModel = require('../models/Producto');
const moment = require('moment');
moment.locale('es');

module.exports = {
    async getCompras(req, res) {
        try {
            const compras = await CompraModel.find();
            res.json(compras);
        } catch (error) {
            res.json({
                success: false,
                message: 'no se pudo obtener las compras'
            });
        }
    },

    async getCompra(req, res){
        try {
            const compra = await CompraModel.findOne({_id: req.params.id});
            res.json({
                producto: compra.producto.nombre,
                cantidad: compra.cantidad,
                monto: compra.monto,
                precioProducto: compra.producto.precio
            });
        } catch (error) {
            res.json({
                success: false,
                message: 'no se pudo obtener la compra'
            });
        }
    },

    async createCompra(req, res) {
        const { producto, cantidad } = req.body;

        if (!producto) {
            return res.json({
                success: false,
                message: 'debe agregar un producto'
            });
        }
        if (!cantidad) {
            return res.json({
                success: false,
                message: 'debe agregar una cantidad'
            });
        }
        try {
            const productoF = await ProductoModel.findOne({ _id: producto });
            if (productoF.stock >= cantidad) {
                const monto = cantidad * productoF.precio;
                const fecha = moment().format('L');
                const newVenta =  new CompraModel({
                    producto,
                    cantidad,
                    monto,
                    fecha
                });
                await newVenta.save();
                productoF.stock = productoF.stock - cantidad;
                await productoF.save();
                res.json({
                    success: true,
                    message: 'Compra realizada con exito'
                });
            }else{
                res.json({
                    success: false,
                    message: 'La cantidad sobrepasa la existencia del producto'
                });
            }
        } catch (error) {
            res.json({
                success: false,
                message: 'No se pudo realizar la compra'
            })
        }
    }
}
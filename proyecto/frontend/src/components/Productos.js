import React, { Component } from 'react';

class Productos extends Component {
    constructor(props){
        super(props)
        this.state = {
            nombre: '',
            precio: '',
            stock:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Formulario de Productos</h5>
                                <form id="form" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="nombre">Nombre del Producto</label>
                                            <input type="text" name="nombre" id="nombre" className="form-control form-control-sm" autoComplete="off" required placeholder="Ingrese nombre del producto" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="precio">Precio del Producto</label>
                                            <input type="number" name="precio" id="precio" className="form-control form-control-sm" autoComplete="off" required placeholder="Ingrese el precio del producto" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="stock">Stock del Producto</label>
                                            <input type="number" name="stock" id="stock" className="form-control form-control-sm" autoComplete="off" required placeholder="Ingrese el stock del producto" onChange={this.handleChange}/>
                                            </div>
                                            <div className="form-group col-sm-10">
                                                <button type="submit" className="btn btn-primary btn-sm">Guardar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Productos;
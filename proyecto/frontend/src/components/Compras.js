import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications'

class Compras extends Component {
    constructor(props){
        super(props)
        this.state = {
            productos: [],
            compras: [],
            cantidad: '',
            _id: '',
            axios: this.props.axios,
            socket: this.props.socket,
            showProcessCompra: false,
            showCompras:true
        }
    }


    componentDidMount() {
        this.fetchRecursos()

    }

    async fetchRecursos(){
        await Promise.all([this.fetchCompras(), this.fetchProductos()])
    }

    async fetchProductos() {
        try {
            await this.state.socket.emit('fetchProductos')
            await this.state.socket.on('Productos', (data) => {
                this.setState({
                    productos: data
                })
            });
        } catch (error) {
            NotificationManager.error('No se pudo recuperar datos', 'Error')
        }
    }

    async fetchCompras(){
        try {
            await this.state.socket.emit('fetchCompras')
            await this.state.socket.on('Compras', (data) => {
                this.setState({
                    compras: data
                })
            });
        } catch (error) {
            NotificationManager.error('No se pudo recuperar datos', 'Error')
        }
    }


    processCompra(id){
        this.setState({
            showProcessCompra: true,
            showCompras: false,
            _id: id
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = async (e) => {
        e.preventDefault()
        const compra = {
            cantidad: this.state.cantidad,
            producto: this.state._id
        }

        try {
            const res = await this.state.axios.post('/api/compras', compra)
            if (res.data.success) {
                NotificationManager.success(res.message, 'Compra')
                this.setState({
                    showCompras: true,
                    showProcessCompra: false,
                    _id: ''
                })
                this.fetchRecursos()

            }else{
                NotificationManager.error(res.data.message, 'Compra')
            }
        } catch (error) {
            console.log('error')
        }
    }

    render() {
        const {showProcessCompra, showCompras} = this.state

        const processCompra = (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Confirmacion de Compra</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="form-group col-sm-10">
                                <label htmlFor="cantidad">Cantidad del Producto</label>
                                <input type="number" name="cantidad" id="cantidad" placeholder="Ingrese la cantidad del producto" className="form-control form-control-sm" onChange={this.handleChange} required autoComplete="off"/>
                            </div>
                            <div className="form-group col-sm-10">
                                <button type="submit" className="btn btn-primary btn-sm">Comprar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )

        const dashboard = (
            <div className="card">
                <div className="card-body">
                    <h5>dashboard compras</h5>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Monto Total</th>
                                <th scope="col">fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.compras.map(compra =>{
                                    return(
                                        <tr key={compra._id}>
                                            <td>{compra.producto.nombre}</td>
                                            <td>{compra.producto.precio}</td>
                                            <td>{compra.cantidad}</td>
                                            <td>{compra.monto}</td>
                                            <td>{compra.fecha}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-5">
                        {
                            this.state.productos.map(producto =>{
                                return(
                                    <div className="card" key={producto._id} style={{marginTop: '4px'}}>
                                        <div className="card-body">
                                            <h5 className="card-title">{producto.nombre}</h5>
                                            <p className="card-text">{producto.precio} Gs.</p>
                                            {producto.stock > 0 ? <p className="card-text">Disponible</p> : <p className="card-text">No Disponible</p>}
                                            <button className="btn btn-primary btn-sm">
                                                <i className="material-icons" onClick={() => this.processCompra(producto._id)}>shopping_cart</i>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-sm-7">
                        {showProcessCompra && processCompra}
                        {showCompras && dashboard}
                    </div>
                </div>
                <NotificationContainer />
            </div>
        );
    }
}

export default Compras;
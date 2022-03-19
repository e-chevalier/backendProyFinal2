import { carritoService } from '../services/carritoService.js'

class Carrito {
    async postCarrito(req, res, next) {
        try {
            let response = await carritoService.postCarrito()
            res.json(response)
        } catch (error) {
            console.log(error)
        }

    }

    async deleteCarrito(req, res, next) {
        try {
            let response = await carritoService.deleteCarrito(req.params.id)
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }

    async getCarritoProductos(req, res, next) {
        try {
            let response = await carritoService.getCarritoProductos(req.params.id)
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }

    async postCarritoProducto(req, res, next) {
        try {
            let response = await carritoService.postCarritoProducto(req.params.id, req.body.id_prod, req.body.qty)
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteCarritoProducto(req, res, next) {
        try {
            let response = await carritoService.deleteCarritoProducto(req.params.id, req.params.id_prod)
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }

}

export let carritoController = new Carrito()


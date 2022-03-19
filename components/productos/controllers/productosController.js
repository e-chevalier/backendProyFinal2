import { productosService } from '../services/productosService.js'

class Productos {


    async getProductos(req, res, next) {
        try {
            let response = await productosService.getProductos(req.params.id)
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }

    async postProductos(req, res, next) {
        try {
            let response = await productosService.postProductos(req.body)
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }

    async putProductos(req, res, next) {
        try {
            let response = await productosService.putProductos(req.params.id, req.body)
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteProductos(req, res, next) {
        try {
            let response = await productosService.deleteProductos(req.params.id)
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }
}

export let productosController = new Productos()
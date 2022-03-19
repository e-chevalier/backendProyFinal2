import { productsContainer, productsMemory } from '../../../daos/index.js'

class Productos {

    async getProductos(id) {
        try {
            console.log(`GET ${id ? "WITH ID => id: " + id : "ALL => "} -- productsRouters`)
            let res = id ? [await productsMemory.getById(id)] : await productsMemory.getAll()

            return ({ status: "OK", products: res, isEmpty: res.length ? false : true })

        } catch (error) {
            console.log(error)
        }
    }

    async postProductos(prod) {
        try {
            console.log(`POST -- productsRouters`)
            let response = {}

            if (Object.keys(prod).length !== 0 && !Object.values(prod).includes('')) {

                let prodID = await productsMemory.save(prod)
                //Save to file
                productsContainer.save(prod)
                response = { status: "ok", id: prodID }
            } else {
                response = { error: 'Algunos campos del producto no fueron completados.' }
            }

            return (response)

        } catch (error) {
            console.log(error)
        }
    }

    async putProductos(id, prod) {
        try {
            console.log(`PUT => id: ${id} -- productsRouters`)
            let exists = await productsMemory.getById(id)

            if (exists) {
                await productsMemory.updateById(id, prod)
                //Save to file
                productsContainer.updateById(id, prod)
            }

            return (exists ? { id: id } : { error: `Producto no encontrado: ${id}` })

        } catch (error) {
            console.log(error)
        }
    }

    async deleteProductos(id) {
        try {
            console.log(`DELETE => id: ${id} -- productsRouters`)
            let index = await productsMemory.deleteById(id)

            if (index >= 0) {
                //Save to file
                await productsContainer.deleteById(id)
            }
            return (index >= 0 ? { id: id } : { error: 'Producto no encontrado.' })

        } catch (error) {
            console.log(error)
        }
    }
}

export let productosService = new Productos()
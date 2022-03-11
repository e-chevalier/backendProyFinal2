import { productsContainer, productsMemory } from '../../../daos/index.js'

class Productos {

    async getProductos(id) {
        console.log(`GET ${id ? "WITH ID => id: " + id : "ALL => "} -- productsRouters`)
        //let filteredArray = id ? productsMemory.filter(prod => prod.id == id) : productsMemory
        let res = id ? [await productsMemory.getById(id)] : await productsMemory.getAll()

        return ({ status: "OK", products: res, isEmpty: res.length ? false : true })
    }

    async postProductos(prod) {
        console.log(`POST -- productsRouters`)
        let response = {}

        if (Object.keys(prod).length !== 0 && !Object.values(prod).includes('')) {
            // const max = productsMemory.reduce((a, b) => Number(a.id) > Number(b.id) ? a : b, { id: 0 })
            // prod.id = Number(max.id) + 1
            // prod.timestamp = Date.now()
            // productsMemory.push(prod)
            let prodID = await productsMemory.save(prod)
            //Save to file
            productsContainer.save(prod)
            response = { status: "ok", id: prodID }
        } else {
            response = { error: 'Algunos campos del producto no fueron completados.' }
        }

        return (response)
    }

    async putProductos(id, prod) {
        console.log(`PUT => id: ${id} -- productsRouters`)
        //let index = productsMemory.findIndex(prod => prod.id == id)
        let exists = await productsMemory.getById(id)

        if (exists) {
            await productsMemory.updateById(id, prod)
            //Save to file
            productsContainer.updateById(id, prod)
        }

        // if (index >= 0) {
        //     prod.id = id
        //     productsMemory[index] = prod
        //     //Save to file
        //     productsContainer.updateById(id, prod)
        // }
        return (exists ? { id: id } : { error: `Producto no encontrado: ${id}` })
    }

    async deleteProductos(id) {
        console.log(`DELETE => id: ${id} -- productsRouters`)
        //let index = productsMemory.findIndex(prod => prod.id == id)
        let index = await productsMemory.deleteById(id)

        if (index >= 0) {
            //Save to file
            productsContainer.deleteById(id)
        }
        return (index >= 0 ? { id: id } : { error: 'Producto no encontrado.' })
    }
}

export let productosService = new Productos()
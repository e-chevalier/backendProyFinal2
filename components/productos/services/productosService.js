import { productsContainer, productsMemory } from '../../../containers/Global.js'

class Productos {

    async getProductos(id) {
        console.log(`GET ${id? "WITH ID => id: " + id : "ALL => "} -- productsRouters`)
        let filteredArray = id ? productsMemory.filter(prod => prod.id == id) : productsMemory

        return({status: "OK", products: filteredArray, isEmpty: filteredArray.length ?  false : true })
    }

    async postProductos(prod) {
        console.log(`POST -- productsRouters`)
        let response = {}

        if (Object.keys(prod).length !== 0 && !Object.values(prod).includes('')) {
            const max = productsMemory.reduce((a, b) => Number(a.id) > Number(b.id) ? a : b, { id: 0 })
            prod.id = Number(max.id) + 1
            prod.timestamp = Date.now()
            productsMemory.push(prod)
            //Save to file
            productsContainer.save(prod)
            response = { status: "ok", id: prod.id}
        } else {
            response = { error: 'Algunos campos del producto no fueron completados.' }
        }

        return (response)
    }

    async putProductos(id, prod) {
        console.log(`PUT => id: ${id} -- productsRouters`)
        let index = productsMemory.findIndex(prod => prod.id == id)
    
        if (index >= 0) {
            prod.id = id
            productsMemory[index] = prod
            //Save to file
            productsContainer.updateById(id, prod)
        }
        return (index >= 0 ? { id: id } : { error: 'Producto no encontrado.' })
    }

    async deleteProductos(id) {
        console.log(`DELETE => id: ${id} -- productsRouters`)
        let index = productsMemory.findIndex(prod => prod.id == id)
    
        if (index >= 0) {
            productsMemory.splice(index, 1)
            //Save to file
            productsContainer.deleteById(id)
        }
        return(index >= 0 ? { id: id } : { error: 'Producto no encontrado.' })
    }
}

export let productosService = new Productos()
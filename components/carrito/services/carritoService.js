import { productsMemory, cartsContainer, cartsMemory } from '../../../daos/index.js'

class Carrito {

    async postCarrito() {
        console.log(`POST CrearCarrito-- cartsRouters`)
        let newCartID = await cartsMemory.save({ products: [] })
        //Save to DAO Container
        cartsContainer.save({ products: [] })

        return { status: "OK", description: "POST CREATE CART RETURN ID", id: newCartID }
    }

    async deleteCarrito(id) {
        console.log(`DELETE Carrito => id: ${id} -- cartsRouters`)
        let index = await cartsMemory.deleteById(id)

        if (index >= 0) {
            //Save to DAO Container
            cartsContainer.deleteById(id)
        }

        return (index >= 0 ? { status: "OK", description: `DELETE CART WITH ID: ${id}`, id: id } : { error: 'Carrito no encontrado.' })
    }

    async getCarritoProductos(id) {
        console.log(`GET Productos => id: ${id} -- cartsRouters`)

        let cart = await cartsMemory.getById(id)
        console.log(await cartsMemory.getAll())
        console.log(cart)

        return (cart ? { status: "OK", description: `GET CART WITH ID: ${id}`, cart: cart } : { error: 'Carrito no encontrado.' })
    }

    async postCarritoProducto(id_cart, id_prod, qty) {
        console.log(`POST Carrito Add PROD  => idCart: ${id_cart} id_prod: ${id_prod} qty: ${qty}-- cartsRouters`)

        let cart = await cartsMemory.getById(id_cart)
        //let prod = productsMemory.find(prod => prod.id == id_prod)
        let prod = await productsMemory.getById(id_prod)
        console.log("prod" + JSON.stringify(prod))

        let response = {}

        if (cart) {
            if (prod) {
               
                let index = cart.products.findIndex(prod => prod.id == id_prod)
                let newProd = {}

                if (index >= 0) {
                    newProd = Object.assign(prod, {qty: cart.products[index].qty + Number(qty)})
                    cart.products[index] = newProd
                } else {
                    newProd = Object.assign(prod, {qty: Number(qty)})
                    cart.products.push( newProd )
                }
                
                //ADD PROD TO THE CART ON MEMORY CONTAINER
                await cartsMemory.updateById(id_cart, { products: cart.products })
                //Save to DAO Container
                cartsContainer.updateById(id_cart, { products: cart.products })
                response = { status: "OK", description: `POST ADD ID_PROD: ${id_prod} INTO ID_CART: ${id_cart}` }
            } else {
                response = { error: `Producto ID:${id_prod} no encontrado.` }
            }
        } else {
            response = { error: `Carrito ID:${id_cart} no encontrado.` }
        }

        return response
    }


    async deleteCarritoProducto(id_cart, id_prod) {
        console.log(`DELETE Productos IDPROD: ${id_prod}  FROM CART ID: ${id_cart} -- cartsRouters`)

        let cart = await cartsMemory.getById(id_cart)
        let response = {}
        let index_prod = -1

        if (cart) {
            console.log(cart)
            index_prod = cart.products.findIndex(prod => Number(prod.id) == Number(id_prod))
            //console.log(index_prod)
            if (index_prod >= 0) {  // Prod id on cart
                cart.products.splice(index_prod, 1) // Remove prod from cart
                await cartsMemory.updateById(id_cart, { products: cart.products })
                response = { status: "OK", description: `DELETE ID_PROD: ${id_prod} FROM ID_CART: ${id_cart}` }
                //Save to DAO Container
                cartsContainer.updateById(id_cart, { products: cart.products })
            } else {
                response = { error: `Producto ID:${id_prod} no encontrado en el carrito ID:${id_cart} .` }
            }
        } else {
            response = { error: `Carrito ID:${id_cart} no encontrado.` }
        }

        return (response)
    }

}

export let carritoService = new Carrito()


import ProductsDaoFile from "../../daos/products/ProductsDaoFile.js"
import CartsDaoFile from "../../daos/carts/CartsDaoFile.js"
/**
 * Container instance 
 */
const contenedor = new ProductsDaoFile()
const products = await contenedor.getAll()
//products.length = 0

/**
 *  Carts instance
 */
const cartsContainer = new CartsDaoFile()
const carts = await cartsContainer.getAll()
console.log(carts)

export {contenedor, products, cartsContainer, carts}
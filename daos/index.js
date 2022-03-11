import ProductsDaoFile from './products/ProductsDaoFile.js'
import ProductsDaoMemory from './products/ProductsDaoMemory.js'
import CartsDaoFile from './carts/CartsDaoFile.js'
import CartsDaoMemory from './carts/CartsDaoMemory.js'
/**
 * Container instance 
 */
const productsContainer = new ProductsDaoFile()
const productsMemory = new ProductsDaoMemory(await productsContainer.getAll())
//const productsMemory = await productsContainer.getAll()
//new ProductsDaoMemory()

//const productsMemory = await productsContainer.getAll()

/**
 *  Carts instance
 */
const cartsContainer = new CartsDaoFile()
const cartsMemory = new CartsDaoMemory(await cartsContainer.getAll())



console.log("GET CARTS")
console.log(await cartsMemory.getAll())

export {productsContainer, productsMemory, cartsContainer, cartsMemory}
import ProductsDaoFile from './products/ProductsDaoFile.js'
import ProductsDaoMemory from './products/ProductsDaoMemory.js'
import ProductsDaoMongoDB from './products/ProductsDaoMongoDB.js'
import ProductsDaoFireStore from './products/ProductsDaoFireStore.js'

import CartsDaoFile from './carts/CartsDaoFile.js'
import CartsDaoMemory from './carts/CartsDaoMemory.js'
import CartsDaoMongoDB from './carts/CartsDaoMongoDB.js'
import CartsDaoFireStore from './carts/CartsDaoFireStore.js'


// // MONOGODB ATLAS CONNECTION
import { connectMongodbAtlas } from '../utils/mongodbAtlas/mongodbAtlas.js'

// // FIRESTORE
// import { db_firestore } from '../utils/firestore/firestore.js'

// import * as modelProducts from '../models/products.js'
// import * as modelCarts from '../models/carts.js'


/**
 * Products Container instance 
 */
// DAO FILE - PRODUCTS
//const productsContainer = new ProductsDaoFile()
await connectMongodbAtlas()
const productsContainer = new ProductsDaoMongoDB()
const productsMemory = new ProductsDaoMemory(await productsContainer.getAll())
//const productsMemory = await productsContainer.getAll()
//new ProductsDaoMemory()

//const productsMemory = await productsContainer.getAll()

/**
 *  Carts Container instance 
 */
// DAO FILE - CARTS
//const cartsContainer = new CartsDaoFile()
const cartsContainer = new CartsDaoMongoDB()
const cartsMemory = new CartsDaoMemory(await cartsContainer.getAll())



console.log("GET CARTS")
console.log(await cartsMemory.getAll())

export {productsContainer, productsMemory, cartsContainer, cartsMemory}
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

// PRODUCTS DAO FILE
//const productsContainer = new ProductsDaoFile()

// PRODUCTS DAO MONGODB
// await connectMongodbAtlas()
// const productsContainer = new ProductsDaoMongoDB()

// PRODUCTS DAO FIRESTORE
const productsContainer = new ProductsDaoFireStore()

// PRODUCTS DAO MEMORY
const productsMemory = new ProductsDaoMemory(await productsContainer.getAll())



/**
 *  Carts Container instance 
 */

// CARTS DAO FILE
//const cartsContainer = new CartsDaoFile()

// CARTS DAO MONGODB
//const cartsContainer = new CartsDaoMongoDB()

// CARTS DAO FIRESTORE
const cartsContainer = new CartsDaoFireStore()

// CARTS DAO MEMORY
const cartsMemory = new CartsDaoMemory(await cartsContainer.getAll())



console.log("GET CARTS")
console.log(await cartsMemory.getAll())

export {productsContainer, productsMemory, cartsContainer, cartsMemory}
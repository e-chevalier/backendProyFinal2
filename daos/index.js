import ProductsDaoFile from './products/ProductsDaoFile.js'
import ProductsDaoMemory from './products/ProductsDaoMemory.js'
import ProductsDaoMongoDB from './products/ProductsDaoMongoDB.js'
import ProductsDaoFireStore from './products/ProductsDaoFireStore.js'
import ProductsDaoKnex from './products/ProductsDaoKnex.js'


import CartsDaoFile from './carts/CartsDaoFile.js'
import CartsDaoMemory from './carts/CartsDaoMemory.js'
import CartsDaoMongoDB from './carts/CartsDaoMongoDB.js'
import CartsDaoFireStore from './carts/CartsDaoFireStore.js'
import CartsDaoKnex from './carts/CartsDaoKnex.js'



// KNEX
import { config_db } from '../config/databaseKnex.js'

// MONOGODB ATLAS CONNECTION
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
//const productsContainer = new ProductsDaoFireStore()

// PRODUCTS DAO KNEX MYSQL
const productsContainer = new ProductsDaoKnex(config_db.mysql)
await productsContainer.createTableProducts()

// PRODUCTS DAO KNEX SQLITE3
// const productsContainer = new ProductsDaoKnex(config_db.sqlite3)
// await productsContainer.createTableProducts()

// PRODUCTS DAO MEMORY
const productsMemory = new ProductsDaoMemory(await productsContainer.getAll())

// console.log("GET PRODUCTS")
// console.log(await productsMemory.getAll())


/**
 *  Carts Container instance 
 */

// CARTS DAO FILE
//const cartsContainer = new CartsDaoFile()

// CARTS DAO MONGODB
//const cartsContainer = new CartsDaoMongoDB()

// CARTS DAO FIRESTORE
//const cartsContainer = new CartsDaoFireStore()

// CARTS DAO KNEX MYSQL
const cartsContainer = new CartsDaoKnex(config_db.mysql)
await cartsContainer.createTableCarts()

// PRODUCTS DAO KNEX SQLITE3
// const cartsContainer = new CartsDaoKnex(config_db.sqlite3)
// await cartsContainer.createTableCarts()

// CARTS DAO MEMORY
const cartsMemory = new CartsDaoMemory(await cartsContainer.getAll())



console.log("GET CARTS")
console.log(await cartsMemory.getAll())

export {productsContainer, productsMemory, cartsContainer, cartsMemory}
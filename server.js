import express from 'express'
import { config } from './config/index.js'
import { serverRoutes } from './routes/index.js'
import cors from 'cors'

// MONOGODB ATLAS CONNECTION
import { connectMongodbAtlas } from './utils/mongodbAtlas/mongodbAtlas.js'
// FIRESTORE
import { db_firestore } from './utils/firestore/firestore.js'

import * as modelProducts from './models/products.js'
import { ContenedorMongoDB } from './utils/libs/ContenedorMongoDB.js'

import { ContenedorFireBase } from './utils/libs/ContenedorFireBase.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors("*"))

const PORT = config.port


serverRoutes(app)

const server = app.listen(PORT, (err) => {
    if (err) {
        console.log("Error while starting server")
    } else {
        console.log(`Servidor http escuchando en el puerto ${server.address().port}
                 Open link to http://127.0.0.1:${server.address().port}`)
    }
})

server.on("error", error => console.log(`Error en servidor ${error}`))

/**
 * Variable that determines if the user is an administrator or not. 
 */
let administrator = true

const data = [
    {
        "title": "Naranja de Ombligo",
        "price": 60,
        "description": "Naranja de Ombligo, presentan unos gajos grandes y generosos en jugo, pero también en fibra insoluble, es decir carnosas, lo que las hace más aptas para naranja de mesa que para hacer zumos. También presentan la ventaja para este fin de que casi nunca tienen las incómodas pepitas que nos encontramos en otras variedades al morder.",
        "thumbnail": "/assets/img/product/1.jpg",
        "timestamp": "1644947630919",
        "code": "Frutas",
        "qty": 0,
        "stock": 5
    },
    {
        "title": "Manzana Gala",
        "price": 90,
        "description": "Este tipo de manzana tiene una piel brillante a rayas o estrías rojas-anaranjadas sobre una base de color amarillenta.Se recomienda comer en crudo, pero también para cocer para hacer tartas y al horno.",
        "thumbnail": "/assets/img/product/2.jpg",
        "timestamp": "1644947630919",
        "code": "Frutas",
        "qty": 0,
        "stock": 6
    },
    {
        "title": "Pera Blanquilla",
        "price": 85,
        "description": "También conocida como Blanca de Aranjuez, esta pera se caracteriza por tener un tamaño mediano, un color verde poco intenso y una piel lisa y brillante. Posee una carne jugosa y una semilla pequeña.",
        "thumbnail": "/assets/img/product/3.jpg",
        "timestamp": "1644947630919",
        "code": "Frutas",
        "qty": 0,
        "stock": 66
    },
    {
        "title": "Banana Cavendish",
        "price": 120,
        "description": "La banana más exportada del mundo tiene una piel robusta y aguanta bien los viajes. Casi todas las bananas vendidas en Estados Unidos y Europa son de esta variedad.",
        "thumbnail": "/assets/img/product/4.jpg",
        "timestamp": "1644947630919",
        "code": "Frutas",
        "qty": 0,
        "stock": 54
    },
    {
        "title": "Frutilla Camarosa",
        "price": 200,
        "description": "De origen californiano (EEUU), de frutos grandes y firmes, es la más consumida en Argentina. Se la considera como la variedad de fresón más cultivada en la actualidad.",
        "thumbnail": "/assets/img/product/5.jpg",
        "timestamp": "1644947630919",
        "code": "Frutas",
        "qty": 0,
        "stock": 25
    }
]


// await connectMongodbAtlas();

// let containerMongo = new ContenedorMongoDB(modelProducts.products)

// console.log("INSERT DATA")

// if (await modelProducts.products.exists()) {
//     console.log("La collection products ya existe.")
// } else {
//     console.log("No existe la collection products.")
//     //await modelProducts.products.insertMany(data)
//     await containerMongo.save({
//         "title": "Naranja de Ombligo",
//         "price": 60,
//         "description": "Naranja de Ombligo, presentan unos gajos grandes y generosos en jugo, pero también en fibra insoluble, es decir carnosas, lo que las hace más aptas para naranja de mesa que para hacer zumos. También presentan la ventaja para este fin de que casi nunca tienen las incómodas pepitas que nos encontramos en otras variedades al morder.",
//         "thumbnail": "/assets/img/product/1.jpg",
//         "timestamp": "1644947630919",
//         "code": "Frutas",
//         "qty": 0,
//         "stock": 5
//     })
// }

// await modelProducts.products.find().sort({ 'id': 1 }).exec()
//     .then(res => {
//         console.log("----- Productos por ID ascendente:")
//         console.log(res)
//     })
//     .catch((error) => console.log(error))


// containerMongo.getMaxid()
// containerMongo.save({
//     "title": "Brócoli",
//     "price": 80,
//     "description": "De color verde profundo e intenso, partiendo de un tallo firme y robusto hasta una particular e inconfundible forma irregular en su copa. El brócoli llega para regalarnos un suave pero distintivo sabor que oscila entre lo amargo y lo dulce.",
//     "thumbnail": "/assets/img/product/7.jpg",
//     "timestamp": 1644947630919,
//     "code": "Verduras",
//     "qty": 0,
//     "stock": 92
// })

//console.log(await containerMongo.getById(2))
//console.log(await containerMongo.getAll())
//console.log(await containerMongo.deleteById(2))
//console.log(await containerMongo.deleteAll())
//console.log(await containerMongo.updateById(3, { title: 'Brócoliiiii', price: 99 }))




let containerFirebase = new ContenedorFireBase(db_firestore, 'products')

// let newContact = {firstname: "PEPE", lastname: "Lopez", email: "jj@gmail.com", phone: "1231412412"}
// db_firestore.collection('contacts').add(newContact)
//         .then( res => console.log(res) )
//         .catch(err => console.log(err));
await containerFirebase.save({
            "title": "Naranja de Ombligo",
            "price": 60,
            "description": "Naranja de Ombligo, presentan unos gajos grandes y generosos en jugo, pero también en fibra insoluble, es decir carnosas, lo que las hace más aptas para naranja de mesa que para hacer zumos. También presentan la ventaja para este fin de que casi nunca tienen las incómodas pepitas que nos encontramos en otras variedades al morder.",
            "thumbnail": "/assets/img/product/1.jpg",
            "timestamp": "1644947630919",
            "code": "Frutas",
            "qty": 0,
            "stock": 5
        })

await containerFirebase.getMaxid()
console.log(await containerFirebase.getById(3))
// console.log(await containerFirebase.getAll())
//console.log(await containerFirebase.deleteById(2))
// console.log(await containerFirebase.getAll())
// console.log(await containerFirebase.deleteAll())
// console.log(await containerFirebase.getAll())
await containerFirebase.updateById(3, {title: 'PEPA LOCA', price: 800})
console.log(await containerFirebase.getById(3))
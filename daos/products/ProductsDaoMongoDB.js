import { ContenedorMongoDB } from '../../containers/ContenedorMongoDB.js'

class ProductsDaoMongoDB extends ContenedorMongoDB {

    constructor(db){
        super(db)
    }


}

export default ProductsDaoMongoDB
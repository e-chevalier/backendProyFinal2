import { ContenedorMongoDB } from '../../containers/ContenedorMongoDB.js'

class CartsDaoMongoDB extends ContenedorMongoDB {

    constructor(db){
        super(db)
    }


}

export default CartsDaoMongoDB
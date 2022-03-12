import { ContenedorKnexMysql } from "../../containers/ContenedorKnexMysql.js"

class ProductsDaoKnexMysql extends ContenedorKnexMysql {

    constructor(knex_options){
        super(knex_options, 'products')
    }
    
}

export default ProductsDaoKnexMysql
import { ContenedorKnexMysql } from "../../containers/ContenedorKnexMysql.js"

class CartsDaoKnexMysql extends ContenedorKnexMysql {

    constructor(knex_options){
        super(knex_options, 'carts')
    }

}

export default CartsDaoKnexMysql
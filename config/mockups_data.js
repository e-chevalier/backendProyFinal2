let productsOnCart = 
    [
        {
            "id": 1,
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
            "id": 2,
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
            "id": 3,
            "title": "Pera Blanquilla",
            "price": 85,
            "description": "También conocida como Blanca de Aranjuez, esta pera se caracteriza por tener un tamaño mediano, un color verde poco intenso y una piel lisa y brillante. Posee una carne jugosa y una semilla pequeña.",
            "thumbnail": "/assets/img/product/3.jpg",
            "timestamp": "1644947630919",
            "code": "Frutas",
            "qty": 0,
            "stock": 66
        }
    ]


let dataCarts = [
    {
        "id": "2",
        "products": productsOnCart,
        "timestamp": 1644947422490,
    }
]

let dataProducts = [
    {
        "id": 1,
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
        "id": 2,
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
        "id": 3,
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
        "id": 4,
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
        "id": 5,
        "title": "Frutilla Camarosa",
        "price": 200,
        "description": "De origen californiano (EEUU), de frutos grandes y firmes, es la más consumida en Argentina. Se la considera como la variedad de fresón más cultivada en la actualidad.",
        "thumbnail": "/assets/img/product/5.jpg",
        "timestamp": "1644947630919",
        "code": "Frutas",
        "qty": 0,
        "stock": 25
    },
    {
        "id": 6,
        "title": "Berenjena Negra",
        "price": 140,
        "description": "Su textura aterciopelada y su sabor suavemente amargo y campestre conmueve a los paladares más exigentes. La berenjena negra es simplemente exquisita.",
        "thumbnail": "/assets/img/product/6.jpg",
        "timestamp": "1644947630919",
        "code": "Verduras",
        "qty": 0,
        "stock": 57
    },
    {
        "id": 7,
        "title": "Brócoli",
        "price": 80,
        "description": "De color verde profundo e intenso, partiendo de un tallo firme y robusto hasta una particular e inconfundible forma irregular en su copa. El brócoli llega para regalarnos un suave pero distintivo sabor que oscila entre lo amargo y lo dulce.",
        "thumbnail": "/assets/img/product/7.jpg",
        "timestamp": "1644947630919",
        "code": "Verduras",
        "qty": 0,
        "stock": 92
    },
    {
        "id": 8,
        "title": "Choclo Unidad",
        "price": 80,
        "description": "Inconfundibles granos color amarillo oro. Crujientes por fuera pero suaves en su interior y, al morderlos, además nos inundan de todo su dulzor tan característico. El choclo es un vegetal tanto conocido como querido por todos.",
        "thumbnail": "/assets/img/product/8.jpg",
        "timestamp": "1644947630919",
        "code": "Verduras",
        "qty": 0,
        "stock": 33
    },
    {
        "id": 9,
        "title": "Almendra",
        "price": 2170,
        "description": "Caprichosas, rebeldes y suavemente crujientes, de interior blanco cremoso y un sabor dulce peculiar. Las almendras son célebres frutos secos, conocidos por todo tipo de paladares y preparaciones.",
        "thumbnail": "/assets/img/product/9.jpg",
        "timestamp": "1644947630919",
        "code": "Frutos Secos",
        "qty": 0,
        "stock": 69
    },
    {
        "id": 10,
        "title": "Castaña de Cajú",
        "price": 1800,
        "description": "Crujientes, gustosas y exquisitas para todo momento. Las castañas de cajú son un singular fruto seco que nos ofrecen una textura y sabor único. Sus usos son variados, podemos optar por consumirlas solas como un snack, combinada con otros frutos secos, o bien, utilizarla en diferentes preparaciones como panes, ensaladas, tortas o postres.",
        "thumbnail": "/assets/img/product/10.jpg",
        "timestamp": "1644947630919",
        "code": "Frutos Secos",
        "qty": 0,
        "stock": 80
    },
    {
        "id": 11,
        "title": "Maní Pelado Salado",
        "price": 490,
        "description": "El maní es el fruto seco más antojadizo, de un sabor cremoso neutro y textura crujiente pero suave. También es capaz de adoptar todo tipo de sabores que se le quiera arrojar. Entero para picar, acompañando una fría cerveza y haciendo una charla más llevadera, también mezclado con otros frutos secos e incluso en ensaladas o combinado con vegetales. Es tal vez uno de los alimentos más versátiles.",
        "thumbnail": "/assets/img/product/11.jpg",
        "timestamp": "1644947630919",
        "code": "Frutos Secos",
        "qty": 0,
        "stock": 76
    },
    {
        "id": 12,
        "title": "Canela",
        "price": 98,
        "description": "La canela es una especia muy recomendada para mejorar los problemas de circulación y muy beneficiosa para las personas con diabetes, ya que ayuda a controlar los niveles de glucosa en sangre. Sobre su origen existen algunos documentos chinos del año 2800 a.C. que ya hablan de la Cinnamomum Zeylanicum. Esta es una palabra de origen griego que significa madera dulce y Zeeylanicum proviene del nombre donde se cultivaba, Ceilán.",
        "thumbnail": "/assets/img/product/12.jpg",
        "timestamp": "1644947630919",
        "code": "Hierbas y Especias",
        "qty": 0,
        "stock": 76
    },
    {
        "id": 13,
        "title": "Albahaca",
        "price": 68,
        "description": "Dulce, fragante y aromática. El sabor de nuestra albahaca se asemeja a un ramo de flores con notas de menta y perfume. Una hierba que nos transmite toda la frescura del Mediterráneo y que no pasará desapercibida en nuestros platos.",
        "thumbnail": "/assets/img/product/13.jpg",
        "timestamp": "1644947630919",
        "code": "Hierbas y Especias",
        "qty": 0,
        "stock": 76
    },
    {
        "id": 14,
        "title": "Menta",
        "price": 168,
        "description": "La menta es una hierba muy utilizada en la cocina oriental. Puede incluirse tanto en platos salados como dulces. Su aroma es fresco y agradable. Vuelve muy refrescante a cualquier plato que la componga.",
        "thumbnail": "/assets/img/product/14.jpg",
        "timestamp": "1644947630919",
        "code": "Hierbas y Especias",
        "qty": 0,
        "stock": 76
    },
    {
        "id": 15,
        "title": "Milanesa de Pollo",
        "price": 500,
        "description": "Filete fino de carne de pollo aderezada de especias y limón de forma exquisita, que le dan un toque característico y que consiste en pasar el filete por huevo batido y posteriormente sufren un rebozado en pan rallado. Cocinar con abundante aceite a gran temperatura.",
        "thumbnail": "/assets/img/product/15.jpg",
        "timestamp": "1644947630919",
        "code": "Hierbas y Especias",
        "qty": 0,
        "stock": 76
    },
    {
        "id": 16,
        "title": "Salmón rojo",
        "price": 2168,
        "description": "El salmón rojo es la especie de salmón más importante en Alaska, aunque no la más abundante, por su sabor rico y textura firme. Su carne tiene más contenido de aceite, y considerado un pescado de muy alta calidad, mucho más que otras especies de salmón.",
        "thumbnail": "/assets/img/product/16.jpg",
        "timestamp": "1644947630919",
        "code": "Hierbas y Especias",
        "qty": 0,
        "stock": 76
    }

]

export { dataCarts, dataProducts }
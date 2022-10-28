const products = [
    {
        id: '1',
        name: 'Motorola Edge 30 - Gris',
        price: 489.00,
        category: 'celular',
        img:'https://armoto.vtexassets.com/arquivos/ids/162870-800-auto?v=637955907100870000&width=800&height=auto&aspect=true', 
        stock: 20, 
        description:'Cargá menos peso y realizá más tareas. El motorola edge 30, el smartphone 5G* más delgado, se diseñó con este objetivo en mente. Con tecnología de avanzada, está diseñado para que sea fácil de usar. La parte posterior está diseñada con material PMMA liviano y resistente con un acabado mate clásico. Tiene una apariencia con patrones sutiles que cambian cuando inclinás el teléfono de lado a lado.Obtené un área de visión 4 veces más amplia con el lente ultra gran angular de alta resolución de 50MP.'
    },
    { 
        id: '2',
        name: 'Celular Galaxy S22 ULTRA Phantom White', 
        price: 1399.00, 
        category: 'celular', 
        img:'https://samsungar.vtexassets.com/arquivos/ids/184297-800-auto?width=800&height=auto&aspect=true', 
        stock: 6, 
        description:'Conocé el Galaxy S22 Ultra, con el poder de Note. El marco pulido, delgado y audaz, rodea la forma extruida para lograr una simetría elegante. Y la cámara lineal, acentuada por anillos de lentes espejados, parece flotar en su lugar.'
    },
    { 
        id: '3', 
        name: 'NKB-413B // GAMING COMBO "4 EN 1"', 
        price: 40.03, 
        category: 'teclados', 
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/593/734/products/nkb-413b-full1-579892ba24cf6ea6f116494433167819-640-0.jpg', 
        stock: 25, 
        description: 'El NKB-413B es un Gaming Combo de Alto Diseño que te garantiza la mejor performance para tus juegos en PC. Contiene Teclado y Mouse Retroiluminados, Mouse Pad que brinda un óptimo deslizamiento y Auriculares con Micrófono confortablemente acolchados. Con el Gaming Combo NKB-413B tendrás todo lo que necesitas para dominar el juego y disfrutar al máximo. Disponible en color Blanco.'
    },
    { 
        id: '4', 
        name: 'Notebook Lenovo 15,6"', 
        price: 359.02, 
        category: 'notebook', 
        img:'https://images.fravega.com/f500/dd73afa92f9434de40d323ea2c74652f.jpg', 
        stock: 10, 
        description:'Celeron 500GB 4GB IP3-81WQ00KUAR'
    },
    { 
        id: '5', 
        name: 'Canon Eos', 
        price: 729.09, 
        category: 'camaras', 
        img:'https://images.fravega.com/f500/a94c3ea9f37fcdb6676b2414cab6195f.jpg', 
        stock: 10, 
        description:'Rebel T7 Dslr Color Negro'
    },
    { 
        id: '6', 
        name: 'Smart TV 4K UHD Samsung 50"', 
        price: 559.99, 
        category: 'televisores', 
        img:'https://images.fravega.com/f500/d7ca24bf5639a7db78c31aa9fa963be8.jpg', 
        stock: 15, 
        description:'UN50AU7000'
    },
    { 
        id: '7', 
        name: 'NKB-405 // COMBO GAMER 4 EN 1', 
        price: 50.06, 
        category: 'teclados', 
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/593/734/products/nkb-405-full1-a3b2ed16a9fde5398216263689369061-640-0.jpg', 
        stock: 25, 
        description: 'El NKB-405 es un Gaming Combo de Alto Diseño que te garantiza la mejor performance para tus juegos en PC. Contiene Teclado y Mouse Retroiluminados, Mouse Pad que brinda un óptimo deslizamiento y Auriculares con Micrófono & LEDS confortablemente acolchados. Con el Gaming Combo NKB-405 tendrás todo lo que necesitas para dominar el juego y disfrutar al máximo.'
    },
    { 
        id: '8', 
        name: 'NKB-412 // GAMING COMBO "4 EN 1"', 
        price: 49.99, 
        category: 'teclados', 
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/593/734/products/nkb-412_full1-2368e19daea5493beb16395801692508-640-0.jpg', 
        stock: 25, 
        description: 'El NKB-412 es un Gaming Combo de Alto Diseño que te garantiza la mejor performance para tus juegos en PC. Contiene Teclado y Mouse Retroiluminados, Mouse Pad que brinda un óptimo deslizamiento y Auriculares con Micrófono confortablemente acolchados. Con el Gaming Combo NKB-412 tendrás todo lo que necesitas para dominar el juego y disfrutar al máximo.'
    },
        { 
        id: '9', 
        name: 'NKB-413R // GAMING COMBO "4 EN 1"', 
        price: 49.99, 
        category: 'teclados', 
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/593/734/products/nkb-413r-full1-1ae4032cb93c6149dd16494462532926-640-0.jpg', 
        stock: 25, 
        description: '{El NKB-413R es un Gaming Combo de Alto Diseño que te garantiza la mejor performance para tus juegos en PC. Contiene Teclado y Mouse Retroiluminados, Mouse Pad que brinda un óptimo deslizamiento y Auriculares con Micrófono confortablemente acolchados. Con el Gaming Combo NKB-413R tendrás todo lo que necesitas para dominar el juego y disfrutar al máximo. Disponible en color Rojo.'
        }
]

export const getProducts = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(products)
        }, 1500)
    })
}


//export const getProducts = (categoryId) => {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
//        }, 1000)
//    })
//}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
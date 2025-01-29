
const productos = [
    {id: "1", nombre:"Fernet Branca 750 cc", precio: 12.500, imagen: "../public/300.png", idCat: "1" },
    {id: "2", nombre:"Gancia Americano 750 cc", precio: 12.500, imagen: "../public/gancia.png", idCat: "2" },
    {id: "3", nombre:"Amargo Obrero 1000 cc", precio: 12.500, imagen: "../public/AmargoObrero.png", idCat: "3" },
    {id: "4", nombre:"Cynar 750 cc", precio: 12.500, imagen: "../public/Cynar.png", idCat: "4" },
    {id: "5", nombre:"Cinzano Blanco 750 cc", precio: 12.500, imagen: "../public/CinzanoBlanco.png", idCat: "4" },
]

export const getProductos = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getProducto = (id) => {
    return new Promise (resolve => {
        setTimeout (() => {
            const productoBuscado = productos.find(item => item.id === id);
            resolve(productoBuscado);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        },2000)
    })
}
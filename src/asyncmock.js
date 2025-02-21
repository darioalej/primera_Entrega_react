
    const productos = [
        {id: "1", nombre:"Las Perdices Exploración Albariño 750cc", precio: 22500, imagen: "/public/vinos/blanco/ALBARIÑO/Las Perdices.png", idCat: "vinos", subCat: "blanco"},
        {id: "2", nombre:"Animal Blend Orgánico 750cc", precio: 12500, imagen: "/public/vinos/blanco/BLEND/Animal_Colors.png", idCat: "vinos", subCat: "blanco"},
        {id: "3", nombre:"Abras Camino Real Blend 750cc", precio: 44000, imagen: "/public/vinos/tinto/blend/Abras_Camino_Real.png", idCat:"vinos", subCat: "tinto"},
        {id: "4", nombre:"Alma Negra Blend 750cc", precio: 24600, imagen: "/public/Vinos/tinto/blend/Alma_Negra_Tinto.jpg", idCat: "vinos", subCat: "tinto"},
        {id: "5", nombre:"Arnaldo B. Blend 750 cc", precio: 13700, imagen: "/public/Vinos/tinto/blend/Arnaldo_B.png", idCat: "vinos", subCat: "tinto"},
        {id: "6", nombre:"Aguijón de Abeja Obrera Malbec 750cc", precio: 22500, imagen: "/public/Vinos/tinto/malbec/Aguijon_de_Abeja_Obrera.jpg", idCat: "vinos", subCat: "tinto"},
        {id: "7", nombre:"Aguijón de Abeja Reina Malbec 750 cc", precio: 29500, imagen: "/public/Vinos/tinto/malbec/Aguijon_de_Abeja_Reina.jpg", idCat: "vinos", subCat: "tinto"},
        {id: "8", nombre:"Humberto Canale Gran Reserva Malbec 750cc", precio: 22000, imagen: "/public/Vinos/tinto/malbec/Humberto_Canale_Gran_Reserva.png", idCat: "vinos", subCat: "tinto"},
        {id: "9", nombre:"Humberto Canale Estate Malbec 750 cc", precio: 9300, imagen: "/public/Vinos/tinto/malbec/Humberto_Canale.png", idCat: "vinos", subCat: "tinto"},
        {id: "10", nombre:"Rutini Dominio Malbec 750cc", precio: 51500, imagen: "/public/Vinos/tinto/malbec/Rutini_Dominio.png", idCat: "vinos", subCat: "tinto"},
        {id: "11", nombre:"Alpataco Malbec 750cc", precio: 10000, imagen: "/public/Vinos/tinto/malbec/Alpataco.png", idCat: "vinos", subCat: "tinto"},
        {id: "12", nombre:"Nico Malbec 750cc", precio: 11000, imagen: "/public/Vinos/tinto/malbec/Nico.png", idCat: "vinos", subCat: "tinto"},
        {id: "13", nombre:"Ricardo Santos Rosado 750cc", precio: 12100, imagen: "/public/Vinos/rosado/BLEND/Ricardo_Santos.png", idCat: "vinos", subCat: "rosado"},
        {id: "14", nombre:"Rutini Rosé 750cc", precio: 43100, imagen: "/public/Vinos/rosado/BLEND/Rutini.png", idCat: "vinos", subCat: "rosado"},
        {id: "15", nombre:"Rosa de Maimará 750cc", precio: 28500, imagen: "/public/Vinos/rosado/BLEND/Rosa_de_Maimará.png", idCat: "vinos", subCat: "rosado"},
        {id: "16", nombre:"Susana Balbo Signature 750cc", precio: 22500, imagen: "/public/Vinos/rosado/BLEND/Susana_Balbo.png", idCat: "vinos", subCat: "rosado"},
        {id: "17", nombre:"Adriana Vineyard Dulce 750cc", precio: 23500, imagen: "/public/Vinos/blanco/CHARDONNAY/Adrianna_Vineyard.png", idCat: "vinos", subCat: "dulce"},
        {id: "18", nombre:"Rutini Dulce Cosecha Tardía 750cc", precio: 44500, imagen: "/public/Vinos/blanco/CHARDONNAY/Rutini.png", idCat: "vinos", subCat: "dulce"},
        {id: "19", nombre:"El Enemigo Chardonnay Dulce 750cc", precio: 24000, imagen: "/public/Vinos/blanco/CHARDONNAY/El_Enemigo.png", idCat: "vinos", subCat: "dulce"},
        {id: "20", nombre:"Las Estelas Dulce 750cc", precio: 12500, imagen: "/public/Vinos/blanco/CHARDONNAY/Las_Estelas.png", idCat: "vinos", subCat: "dulce"},

        {id: "21", nombre:"Cusqueña Dark Porrón botella 330cc", precio: 2500, imagen: "/public/Cervezas/NEGRA/Cusqueña Dark Porrón 330cc.png", idCat: "cervezas", subCat: "negra"},
        {id: "22", nombre:"Corona botella 330cc", precio: 2300, imagen: "/public/Cervezas/RUBIA/Corona Botella 330cc.png", idCat: "cervezas", subCat: "rubia"},
        {id: "23", nombre:"Corona botella 710cc", precio: 3900, imagen: "/public/Cervezas/RUBIA/Corona Botella 710cc.png", idCat:"cervezas", subCat: "rubia"},
        {id: "24", nombre:"Corona lata 410cc", precio: 2300, imagen: "/public/Cervezas/RUBIA/Corona Lata 410cc.png", idCat: "cervezas", subCat: "rubia"},
        {id: "25", nombre:"Cusqueña Golden botella 330cc", precio: 2600, imagen: "/public/Cervezas/RUBIA/Cusqueña Golden 330cc.png", idCat: "cervezas", subCat: "rubia"},
        {id: "26", nombre:"Erdinger Rubia botella 500cc", precio: 6000, imagen: "/public/Cervezas/RUBIA/Erdinger Rubia 500cc.png", idCat: "cervezas", subCat: "rubia"},
        {id: "27", nombre:"Estrella Galicia lata 473cc", precio: 3600, imagen: "/public/Cervezas/RUBIA/Estrella Galicia 473cc.png", idCat: "cervezas", subCat: "rubia"},
        {id: "28", nombre:"Estrella Galicia botella 355cc", precio: 3600, imagen: "/public/Cervezas/RUBIA/Estrella Galicia botella 355cc.png", idCat: "cervezas", subCat: "rubia"},
        {id: "29", nombre:"Estrella Galicia botella 600cc", precio: 5100, imagen: "/public/Cervezas/RUBIA/Estrella Galicia botella 600cc.png", idCat: "cervezas", subCat: "rubia"},
        {id: "30", nombre:"Chachingo lata AAA 355cc", precio: 2700, imagen: "/public/Cervezas/ROJA/Chachingo AAA 355cc.png", idCat: "cervezas", subCat: "roja"},
        {id: "31", nombre:"Chachingo lata IPA 355cc", precio: 2700, imagen: "/public/Cervezas/ROJA/Chachingo IPA 355cc.png", idCat: "cervezas", subCat: "roja"},
        {id: "32", nombre:"Erdingel Dunkel botella 500cc", precio: 6000, imagen: "/public/Cervezas/ROJA/Erdingel Dunkel 500cc.png", idCat: "cervezas", subCat: "roja"},
        {id: "33", nombre:"Ricardo Santos Rosado 750cc", precio: 12100, imagen: "/public/Vinos/rosado/BLEND/Ricardo_Santos.png", idCat: "cervezas", subCat: "roja"},
        {id: "34", nombre:"Rutini Rosé 750cc", precio: 43100, imagen: "/public/Vinos/rosado/BLEND/Rutini.png", idCat: "vinos", subCat: "rosado"},
        {id: "35", nombre:"Rosa de Maimará 750cc", precio: 28500, imagen: "/public/Vinos/rosado/BLEND/Rosa_de_Maimará.png", idCat: "vinos", subCat: "rosado"},
        {id: "36", nombre:"Susana Balbo Signature 750cc", precio: 22500, imagen: "/public/Vinos/rosado/BLEND/Susana_Balbo.png", idCat: "vinos", subCat: "rosado"},
        {id: "37", nombre:"Adriana Vineyard Dulce 750cc", precio: 23500, imagen: "/public/Vinos/blanco/CHARDONNAY/Adrianna_Vineyard.png", idCat: "vinos", subCat: "dulce"},
        {id: "38", nombre:"Rutini Dulce Cosecha Tardía 750cc", precio: 44500, imagen: "/public/Vinos/blanco/CHARDONNAY/Rutini.png", idCat: "vinos", subCat: "dulce"},
        {id: "39", nombre:"El Enemigo Chardonnay Dulce 750cc", precio: 24000, imagen: "/public/Vinos/blanco/CHARDONNAY/El_Enemigo.png", idCat: "vinos", subCat: "dulce"},
        {id: "40", nombre:"Las Estelas Dulce 750cc", precio: 12500, imagen: "/public/Vinos/blanco/CHARDONNAY/Las_Estelas.png", idCat: "vinos", subCat: "dulce"},

        {id: "41", nombre:"Antica Nueva Fórmula 900cc", precio: 9800, imagen: "/public/Espirituosas/APERITIVOS/AMARO/Antica_Formula.png", idCat: "espirituosas", subCat: "aperitivos"},
        {id: "42", nombre:"Angostura Bitter botella 200cc", precio: 37200, imagen: "/public/Espirituosas/APERITIVOS/BITTER/Angostura Bitter 200cc.png", idCat: "espirituosas", subCat: "aperitivos"},
        {id: "43", nombre:"Aperol Botella 750cc", precio: 8100, imagen: "/public/Espirituosas/APERITIVOS/BITTER/Aperol 750 cc.png", idCat:"espirituosas", subCat: "aperitivos"},
        {id: "44", nombre:"Corona lata 410cc", precio: 2300, imagen: "/public/Espirituosas/APERITIVOS/BITTER/Campari 750cc.png", idCat: "espirituosas", subCat: "aperitivos"},
        {id: "45", nombre:"Hespiridina botella 1000cc", precio: 10800, imagen: "/public/Espirituosas/APERITIVOS/BITTER/Hesperidina 1000cc.png", idCat: "espirituosas", subCat: "aperitivos"},
        {id: "46", nombre:"Fernet Branca botella 750cc", precio: 12000, imagen: "/public/Espirituosas/APERITIVOS/FERNET/Aperitivo Fernet Branca 750cc.png", idCat: "espirituosas", subCat:"aperitivos"},
        {id: "47", nombre:"Fernet Branca botella 1000cc", precio: 16500, imagen: "/public/Espirituosas/APERITIVOS/FERNET/Aperitivo Fenet Branca 1000cc.png", idCat: "espirituosas", subCat: "aperitivos"},
        {id: "48", nombre:"Fernet Branca botella 450cc", precio: 9000, imagen: "/public/Espirituosas/APERITIVOS/FERNET/Aperitivo Fernet Branca 450cc.png", idCat: "espirituosas", subCat: "aperitivos"},
        {id: "49", nombre:"Fernet Buhero Negro 700cc", precio: 10000, imagen: "/public/Espirituosas/APERITIVOS/FERNET/Aperitivo Fernet Buhero Negro 700cc.png", idCat: "espirituosas", subCat: "aperitivos"},
        {id: "50", nombre:"Fernet Branca Menta botella 750cc", precio: 10500, imagen: "/public/Espirituosas/APERITIVOS/FERNET/Aperitivo Fernet Branca Menta 750cc.png", idCat:"espirituosas", subCat: "aperitivos"},
        {id: "51", nombre:"Fernet Cestari 750cc", precio: 7200, imagen: "/public/Espirituosas/APERITIVOS/FERNET/Fernet Cestari 750cc.png", idCat: "espirituosas", subCat: "aperitivos"},
        {id: "52", nombre:"Amargo Obrero botella 1000cc", precio: 6000, imagen: "/public/Espirituosas/APERITIVOS/VERMOUTH/Amargo Obrero 950cc.png", idCat: "espirituosas", subCat: "aperitivos"},
        {id: "53", nombre:"Anís Chinchón botella 950cc", precio: 31500, imagen: "/public/Espirituosas/LICORES/ANIS/Chinchón 950cc.png", idCat: "espirituosas", subCat: "licores"},
        {id: "54", nombre:"Rutini Rosé 750cc", precio: 43100, imagen: "/public/Vinos/rosado/BLEND/Rutini.png", idCat: "vinos", subCat: "rosado"},
        {id: "55", nombre:"Rosa de Maimará 750cc", precio: 28500, imagen: "/public/Vinos/rosado/BLEND/Rosa_de_Maimará.png", idCat: "vinos", subCat: "rosado"},
        {id: "56", nombre:"Susana Balbo Signature 750cc", precio: 22500, imagen: "/public/Vinos/rosado/BLEND/Susana_Balbo.png", idCat: "vinos", subCat: "rosado"},
        {id: "57", nombre:"Adriana Vineyard Dulce 750cc", precio: 23500, imagen: "/public/Vinos/blanco/CHARDONNAY/Adrianna_Vineyard.png", idCat: "vinos", subCat: "dulce"},
        {id: "58", nombre:"Rutini Dulce Cosecha Tardía 750cc", precio: 44500, imagen: "/public/Vinos/blanco/CHARDONNAY/Rutini.png", idCat: "vinos", subCat: "dulce"},
        {id: "59", nombre:"El Enemigo Chardonnay Dulce 750cc", precio: 24000, imagen: "/public/Vinos/blanco/CHARDONNAY/El_Enemigo.png", idCat: "vinos", subCat: "dulce"},
        {id: "60", nombre:"Las Estelas Dulce 750cc", precio: 12500, imagen: "/public/Vinos/blanco/CHARDONNAY/Las_Estelas.png", idCat: "vinos", subCat: "dulce"},
 

 
    ];
    
    export const getProductos = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
    };
    
    export const getProducto = (id) => {
        return new Promise(resolve => {
            setTimeout(() => {
                const productoBuscado = productos.find(item => item.id === id);
                resolve(productoBuscado);
            }, 2000);
        });
    };
    
    export const getProductosPorCategoriaYSubcategoria = (idCategory, subCategory) => {
        return new Promise(resolve => {
            setTimeout(() => {
                const productosFiltrados = productos.filter(item => item.idCat === idCategory && item.subCat === subCategory);
                resolve(productosFiltrados);
            }, 2000);
        });
    };
    
import React, { useEffect, useState } from "react";
import { getProductosPorCategoriaYSubcategoria } from "../../asyncmock";
import "./Vinos.css";

const VinosRosado = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductosPorCategoriaYSubcategoria("vinos", "rosado")
            .then(response => setProductos(response))
            .catch(error => console.error("Error al cargar los vinos rosados", error));
    }, []);

    return (
        <div className="vinos-container">
            <h2>Vinos Rosados</h2>
            <div className="container-productos">
                {productos.length > 0 ? (
                    productos.map(producto => (
                        <div key={producto.id} className="producto-card">
                            <img src={producto.imagen} alt={producto.nombre} />
                            <h3>{producto.nombre}</h3>
                            <p>Precio: ${producto.precio}</p>
                        </div>
                    ))
                ) : (
                    <p>Cargando productos...</p>
                )}
            </div>
        </div>
    );
};

export default VinosRosado;

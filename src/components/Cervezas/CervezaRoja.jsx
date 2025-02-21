import React, { useEffect, useState } from "react";
import { getProductosPorCategoriaYSubcategoria } from "../../asyncmock.js";
import "./Cervezas.css";

const CervezaRoja = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductosPorCategoriaYSubcategoria("cervezas", "roja")
            .then(response => setProductos(response))
            .catch(error => console.error("Error al cargar las cervezas rojas", error));
    }, []);

    return (
        <div className="cervezas-container">
            <h2>Cervezas Roja</h2>
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

export default CervezaRoja;

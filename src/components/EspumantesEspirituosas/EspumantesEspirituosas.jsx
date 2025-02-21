import React, { useEffect, useState } from "react";
import { getProductosPorCategoriaYSubcategoria } from "../../asyncmock.js";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const CategoriaTemplate = ({ categoria, subcategoria, titulo, usarFirebase }) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        if (usarFirebase) {
            const db = getFirestore();
            const productosRef = collection(db, "productos");
            const consulta = query(
                productosRef,
                where("categoria", "==", categoria),
                where("subcategoria", "==", subcategoria)
            );

            getDocs(consulta)
                .then((snapshot) => {
                    const productosFirebase = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setProductos(productosFirebase);
                })
                .catch((error) => console.error(`Error al cargar ${titulo}`, error))
                .finally(() => setCargando(false));
        } else {
            getProductosPorCategoriaYSubcategoria(categoria, subcategoria)
                .then(response => setProductos(response))
                .catch(error => console.error(`Error al cargar ${titulo}`, error))
                .finally(() => setCargando(false));
        }
    }, [categoria, subcategoria, titulo, usarFirebase]);

    return (
        <div>
            <h2>{titulo}</h2>
            <div className="container-productos">
                {cargando ? (
                    <p>Cargando productos...</p>
                ) : productos.length > 0 ? (
                    productos.map(producto => (
                        <div key={producto.id} className="producto-card">
                            <img src={producto.imagen} alt={producto.nombre} />
                            <h3>{producto.nombre}</h3>
                            <p>Precio: ${producto.precio}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

// Espumantes (Firebase) sigo probando las respuestas 
export const Brut = () => <CategoriaTemplate categoria="espumantes" subcategoria="brut" titulo="Espumante Brut" usarFirebase={true} />;
export const BrutNature = () => <CategoriaTemplate categoria="espumantes" subcategoria="brut-nature" titulo="Espumante Brut Nature" usarFirebase={true} />;
export const Rose = () => <CategoriaTemplate categoria="espumantes" subcategoria="rose" titulo="Espumante Rosé" usarFirebase={true} />;
export const DemiSec = () => <CategoriaTemplate categoria="espumantes" subcategoria="demi-sec" titulo="Espumante Demi Sec" usarFirebase={true} />;
export const Nature = () => <CategoriaTemplate categoria="espumantes" subcategoria="nature" titulo="Espumante Nature" usarFirebase={true} />;
export const ExtraBrut = () => <CategoriaTemplate categoria="espumantes" subcategoria="extra-brut" titulo="Espumante Extra Brut" usarFirebase={true} />;

// Espirituosas (asyncmock) solucionar el conflicto por la doble importación
export const Aperitivos = () => <CategoriaTemplate categoria="espirituosas" subcategoria="aperitivos" titulo="Aperitivos" usarFirebase={false} />;
export const Licores = () => <CategoriaTemplate categoria="espirituosas" subcategoria="licores" titulo="Licores" usarFirebase={false} />;

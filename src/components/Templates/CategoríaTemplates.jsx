import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const CategoriaTemplate = ({ categoria, subcategoria, titulo }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                // Ajustar el formato de la subcategoría
                const subcategoriaFirebase = subcategoria
                    .replace(/-/g, " ")  // Convierto guiones a espacios
                    .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitaliza cada palabra

                // Referencia a la colección de Firebase
                const productosRef = collection(db, "productos");
                
                // Creo la consulta con los filtros de categoría y subcategoría
                const consulta = query(
                    productosRef,
                    where("Categoría", "==", "Espumantes"),
                    where("Subcategoría", "==", subcategoriaFirebase)
                );

                // Ejecuto la consulta a firebase, 
                const snapshot = await getDocs(consulta);
                const productosFirebase = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                setProductos(productosFirebase);
            } catch (error) {
                console.error(`Error al cargar ${titulo}`, error);
            }
        };

        obtenerProductos();
    }, [categoria, subcategoria, titulo]);

    return (
        <div>
            <h2>{titulo}</h2>
            <div className="container-productos">
                {productos.length > 0 ? (
                    productos.map(producto => (
                        <div key={producto.id} className="producto-card">
                            <img src={producto.imagen} alt={producto.nombre} />
                            <h3>{producto.Nombre}</h3>
                            <p>Precio: ${producto.Precio}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

// Exporto los componentes para cada subcategoría
export const Brut = () => <CategoriaTemplate categoria="espumantes" subcategoria="brut" titulo="Espumante Brut" />;
export const BrutNature = () => <CategoriaTemplate categoria="espumantes" subcategoria="brut-nature" titulo="Espumante Brut Nature" />;
export const Rose = () => <CategoriaTemplate categoria="espumantes" subcategoria="rose" titulo="Espumante Rosé" />;
export const DemiSec = () => <CategoriaTemplate categoria="espumantes" subcategoria="demi-sec" titulo="Espumante Demi Sec" />;
export const Nature = () => <CategoriaTemplate categoria="espumantes" subcategoria="nature" titulo="Espumante Nature" />;
export const ExtraBrut = () => <CategoriaTemplate categoria="espumantes" subcategoria="extra-brut" titulo="Espumante Extra Brut" />;
export const Aperitivos = () => <CategoriaTemplate categoria="espirituosas" subcategoria="aperitivos" titulo="Aperitivos" />;
export const Licores = () => <CategoriaTemplate categoria="espirituosas" subcategoria="licores" titulo="Licores" />;

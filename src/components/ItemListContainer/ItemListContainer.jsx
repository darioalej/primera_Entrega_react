/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getProductos } from "../../asyncmock.js";
import { collection, where, getDocs, query } from "firebase/firestore";
import { db } from "../../services/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams(); 

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where ("idCat", "==", idCategoria)) : collection(db, "productos");

    getDocs(misProductos)
      .then (res => {
          const nuevosProductos = res.docs.map( doc => {
            const data = doc.data();
            return {id: doc.id, ...data}
          });
          setProductos(nuevosProductos);
      })
      .catch ( (error) => console.log("Error", error))
  }, [idCategoria]);

  return (
    <div className="container-productos">
      {productos.length > 0 ? (
        productos.map((prod) => (
          <div key={prod.id} className="producto">
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>Precio: ${prod.precio}</p>
          </div>
        ))
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemListContainer; */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, where, getDocs, query } from "firebase/firestore";
import { db } from "../../services/config";
import { getProductos } from "../../asyncmock";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory === "espumantes") {
      // Si es espumantes, obtener datos de Firebase
      const consulta = query(collection(db, "productos"), where("categoria", "==", "espumantes"));
      getDocs(consulta)
        .then(res => {
          const nuevosProductos = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setProductos(nuevosProductos);
        })
        .catch(error => console.log("Error obteniendo productos de Firebase:", error));
    } else {
      // Para otras categorías, usar asyncmock
      getProductos(idCategory)
        .then(res => setProductos(res))
        .catch(error => console.log("Error obteniendo productos del mock:", error));
    }
  }, [idCategory]);

  return (
    <div className="container-productos">
      {productos.length > 0 ? (
        productos.map((prod) => (
          <div key={prod.id} className="producto">
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>Precio: ${prod.precio}</p>
          </div>
        ))
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemListContainer;

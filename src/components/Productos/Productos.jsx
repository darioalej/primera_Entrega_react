import { useState, useEffect } from "react";
import { db } from "../../services/config";
import { getDocs, collection, query, doc, updateDoc } from "firebase/firestore";

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect ( () => {
        const misProductos = query( collection(db, "productos"));

        getDocs(misProductos)
        .then(respuesta => {
            setProductos( respuesta.docs.map(doc => ({id: doc.id, ...doc.data() })));
        })
    }, [productos]);

    const descontarStock = async(producto) => {
        const productoRef = doc(db, "productos", producto.id);
        let nuevoStock = producto.stock - 1;
        await updateDoc(productoRef, {stock: nuevoStock});

        const productosActualizados = productos.map( p => {
            if(p.id === producto.id){
                return {...p, stock: nuevoStock};  
            } 
            return p;
        })
        setProductos(productosActualizados);
    }

  return (
    <div>
         <h2> Mis Productos </h2>
        {
            productos.map(producto => ( 
                <div key={producto.id}>
                    <h3> {producto.nombre} </h3>
                    <p> Precio: {producto.precio} </p>
                    <p> Stock: {producto.stock} unidades </p>
                    <button onClick={() => descontarStock(producto)}> Comprar </button>
                </div> 
            ))
        }
    </div>
  )
}

export default Productos
import { useState, useEffect, useContext } from "react";
import { db } from "../../services/config";
import {CartContext} from "../../context/CartContext";
import {collection, addDoc} from "firebase/firestore";

const Checkout = () => {
        const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CartContext);

        const [nombre, setNombre] = useState("");
        const [apellido, setApellido] = useState("");
        const [telefono, setTelefono] = useState("");
        const [email, setEmail] = useState("");
        const [emailConfirmacion, setEmailConfirmacion] = useState("");
        const [orderId, setOrderId] = useState("");
        const [error, setError] = useState("");

        const manejadorFormulario = (event) => {
            event.preventDefault();

            if( !nombre || !apellido || !telefono || !email || !emailConfirmacion ) {
                    setError("Por favor completar todos los campos");
                    return
            }

            if ( email !== emailConfirmacion ) {
                setError ("Verificar email que coincida");
                return
            }

            const orden = {
                items: carrito.map( producto => ({
                    id: producto.item.id,
                    nombre: producto.item.nombre,
                    cantidad: producto.cantidad,
                })),
                total: total,
                fecha: new Date(),
                nombre,
                apellido,
                telefono,
                email
            }

            addDoc(collection( db, "ordenes", orden ))
                .then (docRef => {
                    setOrderId(docRef.id);
                    vaciarCarrito();
                })
                .catch (error => {
                    console.log(error);
                    setError("No se puede crear la orden, controlá porque hay error")
                })
        }

  return (
    <div>
            <h2> Checkout </h2>

            <form onSubmit={ manejadorFormulario }>
                {
                    carrito.map( producto => ( 
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad} </p>
                            <p> Precio: $ {producto.item.precio} </p>
                    
                        </div>
                
                    ))
                }
                <hr />
                    <div>
                        <label htmlFor=""> Nombre: </label>
                        <input type="text" onChange={ (e) => setNombre(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor=""> Apellido: </label>
                        <input type="text" onChange={ (e) => setApellido(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor=""> Telefono: </label>
                        <input type="text" onChange={ (e) => setTelefono(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor=""> Email: </label>
                        <input type="text" onChange={ (e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor=""> Confirmar Email: </label>
                        <input type="text" onChange={ (e) => setEmailConfirmacion(e.target.value)}/>
                    </div>

                    {
                        error && <p> {error} </p>
                    }

                    <button type="submit"> Finalizar Orden </button>

                    {
                        orderId && ( <strong> Gracias por tu compra!!! Tu número de orden es: {orderIdderId}</strong> )
                    }

            </form>
    </div>
  )
}

export default Checkout
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import CartWidget from "../CartWidget/CartWidget";

const Cart = () => {
    const  { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CartContext);

    if ( cantidadTotal === 0 ) {

             return (
                    <>
                        <h2> No hay productos en el carrito </h2>
                        <Link to="/"> Ver detalle de todos los productos </Link>
                    </>
                )
        }

    return (
        <div>
            {
                carrito.map( producto => <CartItem key={producto.item.id} {...producto} /> )
            }

            <h3>Total: ${total} </h3>
            <h3>Cantidad Total {cantidadTotal} </h3>
            <button onClick={ () => vaciarCarrito()}> Varciar Carrito </button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
        )      

}

export default Cart
import {CartContext} from "../../context/CartContext";
import { useContext } from "react";

const CartItem = ({item, cantidad}) => {
    const { eliminarProducto } = useContext(CartContext);

  return (
    <div>
        <h4> {item.nombre} </h4>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: {item.precio} </p>
        <button onClick={ () => eliminarProducto( item.id)}> Eliminar Producto </button>
        <hr />
    </div>
  )
}

export default CartItem
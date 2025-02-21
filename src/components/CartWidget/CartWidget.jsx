import "./CartWidget.css"; 
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext)
    
  return (
    <div>
        <Link to="/cart">
        <img className="imgCarrito" src="/carrito.png" alt="Carrito de Compras" />
        {
          cantidadTotal > 0 &&  <strong> {cantidadTotal} </strong>
        }
        </Link>
    </div>
  )
}

export default CartWidget     


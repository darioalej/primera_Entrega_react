import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../../context/CartContext";

const ItemDetail = ({ id, nombre, precio, imagen, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const manejadorCantidad = (cantidad) => {
            setAgregarCantidad(cantidad);
          
          const item = {id, nombre, precio};
          agregarAlCarrito(item, cantidad);
    }

    const {agregarAlCarrito} = useContext(CartContext)
  return (
    <div className="item-detail">
      <h2> Nombre: {nombre} </h2>
      <h3> Id: {id} </h3>
      <h3> Precio: {precio} </h3>
      <p> Para que te tomes vos solo o con tus cumpas. Combinalo como quieras borrachín </p>
      <img src={imagen} alt={nombre} />

      {
      agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }
    </div>
  );
};
export default ItemDetail;
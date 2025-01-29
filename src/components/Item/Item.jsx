import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, imagen}) => {
  return (
    <div className='card-producto'>
        <img src={imagen} alt={nombre} />
        <h3> Nombre: {nombre} </h3>
        <p> Precio: {precio} </p>
        <p> Id: {id} </p>
        <Link className='btn' to={`/item/${id}`}> Ver Detalle </Link>
    </div>
  )
}

export default Item
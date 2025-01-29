import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, imagen}) => {
  return (
    <div>
        <h2> Nombre: {nombre} </h2>
        <h3> Id: {id} </h3>
        <h3> Precio: {precio} </h3>
        <p> Para que te tomes vos solo o con tus cumpas. Combinalo como quieras borrachín </p>
        <img src={imagen} alt={nombre} />
    </div>
  )
}

export default ItemDetail
import Item from "../Item/Item";
import "./ItemList.css"; // Asegúrate de importar el CSS

const ItemList = ({ productos }) => {
  return (
    <div className="container-productos">
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ItemList;

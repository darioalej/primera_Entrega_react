import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { getProductos, getProductosPorCategoria } from '../../AsyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [enConstruccion, setEnConstruccion] = useState(false);

  const { idCategoria } = useParams();

  useEffect(() => {
    const categoriasEnConstruccion = ["Estuchería", "Bodegas", "Ofertas"];

    if (categoriasEnConstruccion.includes(idCategoria)) {
      setEnConstruccion(true);
    } else {
      setEnConstruccion(false);
      const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
      funcionProductos(idCategoria)
        .then(respuesta => setProductos(respuesta));
    }
  }, [idCategoria]);

    return (
      <div>
        <h2>Listado de Productos</h2>
        {enConstruccion ? (
          <div>
            <h3>⚠️ Sitio en construcción ⚠️</h3>
            <p>Estamos trabajando en esta sección, vuelve pronto.</p>
            <Link to="/" className="btn">Volver al menú principal</Link>
          </div>
        ) : (
          <div className="container-productos">
            <ItemList productos={productos} />
          </div>
        )}
      </div>
    )};
    

export default ItemListContainer

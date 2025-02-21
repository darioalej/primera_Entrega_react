import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ scrollToFooter }) => {
  const [menuAbierto, setMenuAbierto] = useState(null);

  return (
    <nav>
      <ul>
        {/* Categoría Vinos, no tocar  */}
        <li 
          className="dropdown" 
          onMouseEnter={() => setMenuAbierto("vinos")} 
          onMouseLeave={() => setMenuAbierto(null)}
        >
          <NavLink to="#">Vinos</NavLink>
          {menuAbierto === "vinos" && (
            <ul className="submenu">
              <li><NavLink to="/category/vinos/blanco">Blanco</NavLink></li>
              <li><NavLink to="/category/vinos/tinto">Tinto</NavLink></li>
              <li><NavLink to="/category/vinos/rosado">Rosado</NavLink></li>
              <li><NavLink to="/category/vinos/dulce">Dulce</NavLink></li>
            </ul>
          )}
        </li>

        {/* Cervezas, no tocarrrrr */}
        <li 
          className="dropdown" 
          onMouseEnter={() => setMenuAbierto("cervezas")} 
          onMouseLeave={() => setMenuAbierto(null)}
        >
          <NavLink to="#">Cervezas</NavLink>
          {menuAbierto === "cervezas" && (
            <ul className="submenu">
              <li><NavLink to="/category/cervezas/negra">Negra</NavLink></li>
              <li><NavLink to="/category/cervezas/roja">Roja</NavLink></li>
              <li><NavLink to="/category/cervezas/rubia">Rubia</NavLink></li>
            </ul>
          )}
        </li>

        {/* Espirituosas si tocarrrrrr */}
        <li 
          className="dropdown" 
          onMouseEnter={() => setMenuAbierto("espirituosas")} 
          onMouseLeave={() => setMenuAbierto(null)}
        >
          <NavLink to="#">Espirituosas</NavLink>
          {menuAbierto === "espirituosas" && (
            <ul className="submenu">
              <li><NavLink to="/category/espirituosas/aperitivos">Aperitivos</NavLink></li>
              <li><NavLink to="/category/espirituosas/licores">Licores</NavLink></li>
            </ul>
          )}
        </li>

        {/* Espumantes */}
        <li 
          className="dropdown" 
          onMouseEnter={() => setMenuAbierto("espumantes")} 
          onMouseLeave={() => setMenuAbierto(null)}
        >
          <NavLink to="#">Espumantes</NavLink>
          {menuAbierto === "espumantes" && (
            <ul className="submenu">
              <li><NavLink to="/category/espumantes/brut">Brut</NavLink></li>
              <li><NavLink to="/category/espumantes/brut-nature">Brut Nature</NavLink></li>
              <li><NavLink to="/category/espumantes/demi-sec">Demi Sec</NavLink></li>
              <li><NavLink to="/category/espumantes/extra-brut">Extra Brut</NavLink></li>
              <li><NavLink to="/category/espumantes/nature">Nature</NavLink></li>
              <li><NavLink to="/category/espumantes/rose">Rosé</NavLink></li>
            </ul>
          )}
        </li>

        {/* Nuestro Local (Scroll al Footer cuando clickean para que lo lleve abajo) */}
        <li>
          <button onClick={scrollToFooter}>Nuestros Locales</button>
        </li>

        {/* Otras categorías */}
        <li><NavLink to="/category/bodegas">Bodegas</NavLink></li>
        <li><NavLink to="/category/ofertas">Ofertas</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;

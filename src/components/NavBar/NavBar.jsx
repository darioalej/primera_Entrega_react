import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header> 
            <div className="logo-container">
                    <img src="/barney.png" alt="Logo de Barney" className="logo" />
                <Link to='/'>
                    <span>Drinks Barney</span>
                </Link> 
            </div>
        
        <nav>
            <ul>
                <li> 
                    <NavLink to="categoria/1"> Vinos </NavLink>
                </li>
                <li>
                    <NavLink to="categoria/2"> Cervezas </NavLink>
                </li>
                <li> 
                    <NavLink to="categoria/3"> Espirituosas </NavLink>
                </li>
                <li> 
                    <NavLink to="categoria/4"> Espumantes </NavLink>
                </li>
                <li> 
                    <NavLink to="categoria/Estuchería"> Estuchería </NavLink>
                </li>
                <li> 
                    <NavLink to="categoria/Bodegas"> Bodegas </NavLink> 
                </li>
                <li> 
                    <NavLink to="categoria/Ofertas"> Ofertas </NavLink>
                </li>
            </ul>
        </nav>
        <div className="auth-cart-container">
            <button className="auth-button">Ingresar/Registrarme</button>
            <CartWidget />
        </div>
        
    </header>
  )
}

export default NavBar
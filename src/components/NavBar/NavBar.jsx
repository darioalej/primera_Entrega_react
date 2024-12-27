import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
        <div className="logo-container">
            <img src="/barney.png" alt="Logo de Barney" className="logo" />
            <span>Drinks Barney</span>
        </div>
        <nav>
            <ul>
                <li> Vinos </li>
                <li> Cervezas </li>
                <li> Espirituosas </li>
                <li> Espumantes </li>
                <li> Estuchería </li>
                <li> Bodegas </li>
                <li> Ofertas </li>
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
import "./CabeceraLogo.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const CabeceraLogo = () => {
  return (
    <header>
        <div className="header-info">
             <div className="social-contact">
                 <div className="social-icons">
                        <img src="/icono_facebook.png" alt="Facebook" className="social-icon" />
                        <img src="/icono_instagram.png" alt="Instagram" className="social-icon" />
                        <img src="/icono_whatsapp.png" alt="WhatsApp" className="social-icon" />
                        <span className="phone-number">3624 45893212</span>
                </div>
                <p className="email">ventaonlinebebidas@harrisondrinks.com.ar</p>
                
             </div>
             <input type="text" placeholder="Buscar bebidas..." className="search-bar" />
        </div>


        <div className="logo-container">
                 <Link to='/'>
                    <span> Harrison </span>
                    <img src="/logoTienda3.png" alt="Logo de la tienda" className="logo" />
                    <span> Drinks </span>
                </Link> 
        </div>

        <div className="auth-cart-container"> 
            <button className="auth-button">Ingresar/Registrarme</button>
            <CartWidget />
        </div>

                           
    </header>
  )
}

export default CabeceraLogo
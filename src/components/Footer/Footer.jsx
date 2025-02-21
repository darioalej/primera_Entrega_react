import React from "react";
import "./Footer.css";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="footer">
      <div className="footer-widgets">
        <div className="container">
          <div className="footer-logo">
            <img
              className="logo-principal"
              src="/logoTienda3.png"
              alt="logo"
            />
          </div>

          <div className="footer-info">
            <p>
              <b><em>Suc. Colegiales:</em></b> Alvarez Thomas 299 / Ciudad Autónoma de BsAs - Argentina /
              <a href="tel:+541145523735"> (011) 4552-3735</a>
            </p>
            <p>
              <b><em>Suc. Belgrano:</em></b> Elcano 3499 (esquina Delgado) / Ciudad Autónoma de BsAs - Argentina /
              <a href="tel:+541145514429"> (011) 4551-4429</a>
            </p>
            <p>
              <b><em>Whatsapp:</em></b>
              <a href="https://wa.me/5491166110299"> 11 6611-0299</a>
            </p>
            <p>
              <b><em>Contacto:</em></b>
              <a href="mailto:ventaonline@harrisondrinks.com.ar"> ventaonline@harrisondrinks.com.ar</a>
            </p>
            <p>
              <b><em>Horario:</em></b> Lunes a Sábado de 11 a 20hs
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <a href="http://www.darioAlejandroChacon.com.ar" target="_blank" rel="noopener noreferrer">
            Desarrollado por Dario Ch Sistemas
          </a>
        </p>
      </div>
    </footer>
  );
});

export default Footer;

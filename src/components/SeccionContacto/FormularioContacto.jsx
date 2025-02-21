import React from 'react';
import "./FormularioContacto.css";

const FormularioContacto = () => {
  return (
    <div className="pre-footer">
      <h2 className="contact-title">Contacto</h2>

      <div className="form-container">
        <form className="validate" action="" method="post" id="consulta2">
          <div className="form-group">
            <input className="required" type="text" name="razon" placeholder="Nombre y Apellido*" />
            <input type="text" name="empresa" placeholder="Empresa" />
            <input className="required" type="text" name="telefono" placeholder="Teléfono" />
            <input className="required" type="email" name="mail" placeholder="E-mail*" />
            <textarea className="required" name="cuerpo" rows="5" placeholder="Mensaje..."></textarea>

            <div className="required-fields">Campos Obligatorios *</div>
            <div className="mje-result2"></div>

            <button type="button" id="btn-enviar2" className="btn btn-default">
              ENVIAR
            </button>
          </div>
        </form>
      </div>

      <h2 className="sucursales-title">Nuestras Sucursales</h2>

      <div className="map-container">
        <div className="map-item">
          <h3>Sucursal Colegiales</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.8989604243066!2d-58.450430084770964!3d-34.58142308046517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e61b362a9eb85d8!2sBaltimore%20Tienda%20de%20Licores%20y%20Vinos!5e0!3m2!1ses-419!2sar!4v1599511602553!5m2!1ses-419!2sar"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>

        <div className="map-item">
          <h3>Sucursal Belgrano</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6570.045912663546!2d-58.46291044991154!3d-34.5782856836343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5683f29963b%3A0xb7690f8a7c02db4e!2sBaltimore%20Tienda%20de%20Licores%2C%20Vinos%20%26%20M%C3%A1s!5e0!3m2!1ses-419!2sar!4v1625666097077!5m2!1ses-419!2sar"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FormularioContacto;

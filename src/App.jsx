import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrousel from "./components/Carrousel/swiper";
import CabeceraLogo from "./components/CabeceraLogo/CabeceraLogo";
import FormularioContacto from "./components/SeccionContacto/FormularioContacto";
import Footer from "./components/Footer/Footer";
import { Brut, BrutNature, Rose, DemiSec, Nature, ExtraBrut } from "../components/templates/CategoriaTemplate";


// Importación de Vinos
import VinosBlanco from "./components/Vinos/VinosBlanco";
import VinosTinto from "./components/Vinos/VinosTinto";
import VinosRosado from "./components/Vinos/VinosRosado";
import VinosDulce from "./components/Vinos/VinosDulce";

// Importación de Cervezas
import CervezaRubia from "./components/Cervezas/CervezaRubia";
import CervezaNegra from "./components/Cervezas/CervezaNegra";
import CervezaRoja from "./components/Cervezas/CervezaRoja";

// Importación de Espumantes y Champagne
import { Aperitivos, Licores } from "./components/EspumantesEspirituosas/EspumantesEspirituosas";
// Importo el carrito y elementos que lo complementan 
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";

const App = () => {
  const footerRef = useRef(null);

  // Función para hacer scroll hasta el Footer
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <BrowserRouter>
      <CartProvider>
      <CabeceraLogo />
      <NavBar scrollToFooter={scrollToFooter} />

      <Routes>
        {/* Home con el Carrousel */}
        <Route path="/" element={<>
          <Carrousel />
          <ItemListContainer />
          <FormularioContacto />  {/* Formulario solo en Home */}
        </>} />

        {/* Categorías de productos */}
        <Route path="/category/:idCategory" element={<ItemListContainer />} />

        {/* Vinos */}
        <Route path="/category/vinos/blanco" element={<VinosBlanco />} />
        <Route path="/category/vinos/tinto" element={<VinosTinto />} />
        <Route path="/category/vinos/rosado" element={<VinosRosado />} />
        <Route path="/category/vinos/dulce" element={<VinosDulce />} />

        {/* Cervezas */}
        <Route path="/category/cervezas/rubia" element={<CervezaRubia />} />
        <Route path="/category/cervezas/negra" element={<CervezaNegra />} />
        <Route path="/category/cervezas/roja" element={<CervezaRoja />} />

        {/* Espumantes y Champagne */}
        {/* Espumantes */}
        <Route path="/category/espumantes/brut" element={<Brut />} />
        <Route path="/category/espumantes/brut-nature" element={<BrutNature />} />
        <Route path="/category/espumantes/rose" element={<Rose />} />
        <Route path="/category/espumantes/demi-sec" element={<DemiSec />} />
        <Route path="/category/espumantes/nature" element={<Nature />} />
        <Route path="/category/espumantes/extra-brut" element={<ExtraBrut />} />

        {/* Espirituosas */}
        <Route path="/category/espirituosas/aperitivos" element={<Aperitivos />} />
        <Route path="/category/espirituosas/licores" element={<Licores />} />


        {/* Detalles de un producto */}
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />

        <Route path="/Cart" element= { <Cart/> } />
        <Route path="/Checkout" element= { <Checkout/> } />

        {/* Página 404 */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>

      {/* Sección de contacto y footer */}
      <Footer ref={footerRef} />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;




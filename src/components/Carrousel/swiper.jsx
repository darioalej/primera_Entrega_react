/*import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='slide-content'>
            <h3> Nuestra Categorías de vinos son las mas finas y variadas, entra a verlos, cómprate algunos y pruébalos </h3> 
            <img src="/imgCarrousel/vinos.webp" alt="vinos" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className='slide-content'>
            <h3> Las cervezas importadas más ricas están acá </h3> 
            <img src="/imgCarrousel/cervezas.webp" alt="cervezas" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-content'>
            <h3> Todos los productos para hacer los más deliciosos tragos de autor </h3> 
            <img src="/imgCarrousel/espirituosas.webp" alt="bebidas espirituosas" />
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className='slide-content'>
            <h3> Deleitate con nuestros Champagnes nacionales e importados </h3>
            <img src="/imgCarrousel/champ.webp" alt="champagnes" /> 
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='slide-content'>
            <h3> Visita nuestras sucursales con nuestra atención personalizada </h3>
            <img src="/imgCarrousel/local.webp" alt="champagnes" /> 
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
*/
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="swiper-container">
      {/* Título agregado arriba del carrusel */}
      

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='slide-content'>
            <h3> Nuestra Categorías de vinos son las mas finas y variadas, entra a verlos, cómprate algunos y pruébalos </h3> 
            <img src="/imgCarrousel/vinos.webp" alt="vinos" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-content'>
            <h3> Las cervezas importadas más ricas están acá </h3> 
            <img src="/imgCarrousel/cervezas.webp" alt="cervezas" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-content'>
            <h3> Todos los productos para hacer los más deliciosos tragos de autor </h3> 
            <img src="/imgCarrousel/espirituosas.webp" alt="bebidas espirituosas" />
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className='slide-content'>
            <h3> Deleitate con nuestros Champagnes nacionales e importados </h3>
            <img src="/imgCarrousel/champ.webp" alt="champagnes" /> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-content'>
            <h3> Visita nuestras sucursales con nuestra atención personalizada </h3>
            <img src="/imgCarrousel/local.webp" alt="local" /> 
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <h2 className="titulo">Todos Nuestros Productos</h2>
      {/* Mensaje agregado debajo del carrusel */}
      <p className="aviso">
        Si quieres buscas algo más específico, vé más arriba y elige en el menú de categorías. <br /> <br />
        Las imágenes de los artículos son de carácter ilustrativo. <br />
        Los precios incluyen IVA. <br />
        Beber con moderación. Prohibida la venta a menores de 18 años.
      </p>
    </div>
  );
}

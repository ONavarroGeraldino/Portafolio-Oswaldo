import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

// Importación de imágenes locales
import imgPortfolio from './imagenes/Oswaldo.png'; 
import imgMusic from './imagenes/MP3.png';
import imgEcommerce from './imagenes/Store.png';
import imgDashboard from './imagenes/Dashboard.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './ProjectCarousel.css';

const ProjectCarousel = () => {
  const projects = [
    { 
      id: 1, 
      title: "Mi Portafolio", 
      desc: "React + Vite", 
      img: imgPortfolio, 
      link: "#" 
    },
    { 
      id: 2, 
      title: "Music Player", 
      desc: "MP3LOCAL", 
      img: imgMusic, 
      link: "https://musicprojectmp3.netlify.app/" 
    },
    { 
      id: 3, 
      title: "E-commerce", 
      desc: "Frontend Store", 
      img: imgEcommerce, 
      link: "https://shopprojectoswaldo.netlify.app/" 
    },
    { 
      id: 4, 
      title: "Dashboard", 
      desc: "Control Panel", 
      img: imgDashboard, 
      link: "https://dashboardprojectoswaldo.netlify.app/" 
    },
  ];

  return (
    <div className="main-container">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="swiper-container-wrapper">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="project-card">
                <img src={p.img} alt={p.title} />
                <div className="project-info">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-view"
                  >
                    Ver Detalles
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectCarousel;
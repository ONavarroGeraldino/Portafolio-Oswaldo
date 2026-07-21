import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ProjectCard } from '../molecules/ProjectCard';
import { useLanguage } from '../shared/context/LanguageContext';
import ScrollFloat from '../components/ScrollFloat';

// Importación de imágenes
import imgPortfolio from '../shared/assets/images/Oswaldo.png';
import imgMusic from '../shared/assets/images/MP3.png';
import imgEcommerce from '../shared/assets/images/Store.png';
import imgDashboard from '../shared/assets/images/Dashboard.png';
import imgEventos from '../shared/assets/images/Eventos.png';
import imgMovies from '../shared/assets/images/Movies.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './ProjectsSection.css';

const images = [imgPortfolio, imgMusic, imgEcommerce, imgDashboard, imgEventos, imgMovies];

export function ProjectsSection() {
    const { t } = useLanguage();

    return (
        <div className="main-container">
            <ScrollFloat
                containerClassName="section-title"
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
            >
                {t.projects.title}
            </ScrollFloat>
            <div className="swiper-container-wrapper">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    grabCursor={true}
                    centeredSlides={false}
                    slidesPerView={'auto'}
                    freeMode={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="mySwiper"
                >
                    {t.projects.projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <ProjectCard
                                title={project.title}
                                desc={project.desc}
                                img={images[index]}
                                link={project.link}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

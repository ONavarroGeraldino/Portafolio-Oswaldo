import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { ProjectCard } from '../molecules/ProjectCard';
import { useLanguage } from '../shared/context/LanguageContext';

// Importación de imágenes
import imgPortfolio from '../shared/assets/images/Oswaldo.png';
import imgMusic from '../shared/assets/images/MP3.png';
import imgEcommerce from '../shared/assets/images/Store.png';
import imgDashboard from '../shared/assets/images/Dashboard.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './ProjectsSection.css';

const images = [imgPortfolio, imgMusic, imgEcommerce, imgDashboard];

export function ProjectsSection() {
    const { t } = useLanguage();

    return (
        <div className="main-container">
            <h2 className="section-title">{t.projects.title}</h2>
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

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useLanguage } from '../shared/context/LanguageContext';
import { FaArrowRight, FaCode, FaRocket, FaUser } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroCarousel.css';

const slides = [
    {
        icon: <FaRocket />,
        gradient: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    },
    {
        icon: <FaCode />,
        gradient: 'linear-gradient(135deg, #0d1117, #161b22, #0d1117)',
    },
    {
        icon: <FaUser />,
        gradient: 'linear-gradient(135deg, #1a0a2e, #16213e, #0f3460)',
    },
];

export function HeroCarousel() {
    const { t } = useLanguage();

    return (
        <section className="hero-carousel">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="hero-swiper"
            >
                <SwiperSlide>
                    <div className="hero-slide" style={{ background: slides[0].gradient }}>
                        <div className="hero-particle particle-1" />
                        <div className="hero-particle particle-2" />
                        <div className="hero-content">
                            <span className="hero-badge">Bienvenido</span>
                            <h1 className="hero-title">{t.nav.logo}</h1>
                            <p className="hero-desc">{t.about.title}</p>
                            <div className="hero-actions">
                                <a href="#proyectos" className="hero-btn primary">
                                    {t.projects.title} <FaArrowRight />
                                </a>
                                <a href="#contacto" className="hero-btn secondary">
                                    {t.nav.contacto}
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero-slide" style={{ background: slides[1].gradient }}>
                        <div className="hero-particle particle-1" />
                        <div className="hero-particle particle-2" />
                        <div className="hero-content">
                            <span className="hero-badge">Stack</span>
                            <h2 className="hero-title">{t.tech.title}</h2>
                            <ul className="hero-skills">
                                {t.tech.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                            <a href="#tecnologias" className="hero-btn primary">
                                Ver más <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero-slide" style={{ background: slides[2].gradient }}>
                        <div className="hero-particle particle-1" />
                        <div className="hero-particle particle-2" />
                        <div className="hero-content">
                            <span className="hero-badge">Proyectos</span>
                            <h2 className="hero-title">{t.projects.title}</h2>
                            <p className="hero-desc">
                                {t.projects.projects.length} proyectos desarrollados
                            </p>
                            <a href="#proyectos" className="hero-btn primary">
                                Explorar <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

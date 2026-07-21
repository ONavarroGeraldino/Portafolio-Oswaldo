import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import { FaReact, FaJs, FaLaravel, FaHtml5, FaCss3, FaGitAlt } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './CardSlider.css';

const cards = [
    { icon: <FaReact />, title: 'React', desc: 'SPAs modernas con componentes reutilizables', color: '#61DAFB' },
    { icon: <FaJs />, title: 'JavaScript', desc: 'ES6+, async/await, manipulación del DOM', color: '#F7DF1E' },
    { icon: <FaLaravel />, title: 'Laravel', desc: 'APIs RESTful, autenticación y backend', color: '#FF2D20' },
    { icon: <FaHtml5 />, title: 'HTML5', desc: 'Semántica web, accesibilidad y SEO', color: '#E34F26' },
    { icon: <FaCss3 />, title: 'CSS3', desc: 'Flexbox, Grid, animaciones y diseño responsive', color: '#1572B6' },
    { icon: <FaGitAlt />, title: 'Git', desc: 'Control de versiones, ramas y colaboración', color: '#F05032' },
];

export function CardSlider() {
    return (
        <section className="card-slider-section">
            <h2 className="section-title">Tecnologías Destacadas</h2>
            <div className="card-slider-container">
                <Swiper
                    modules={[EffectCards, Autoplay]}
                    effect={'cards'}
                    grabCursor={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="card-swiper"
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="card-slide" style={{ borderTop: `4px solid ${card.color}` }}>
                                <div className="card-icon" style={{ color: card.color }}>
                                    {card.icon}
                                </div>
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-desc">{card.desc}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import './TestimonialsCarousel.css';

const testimonials = [
    {
        name: 'María García',
        role: 'CEO, TechStart',
        text: 'Un desarrollador excepcional. Entregó el proyecto antes de tiempo y con una calidad superior a la esperada.',
        rating: 5,
    },
    {
        name: 'Carlos López',
        role: 'Project Manager',
        text: 'Profesionalismo y dedicación total. Resolvió problemas complejos con soluciones elegantes y eficientes.',
        rating: 5,
    },
    {
        name: 'Ana Martínez',
        role: 'Diseñadora UX',
        text: 'La colaboración fue fluida y el resultado final superó nuestras expectativas. Muy recomendado.',
        rating: 5,
    },
    {
        name: 'Pedro Sánchez',
        role: 'Founder, DevStudio',
        text: 'Dominio técnico impresionante y una gran capacidad para entender las necesidades del cliente.',
        rating: 5,
    },
];

export function TestimonialsCarousel() {
    return (
        <section className="testimonials-section">
            <h2 className="section-title">Testimonios</h2>
            <div className="testimonials-container">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="testimonials-swiper"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-card">
                                <FaQuoteLeft className="quote-icon" />
                                <p className="testimonial-text">{item.text}</p>
                                <div className="testimonial-stars">
                                    {Array.from({ length: item.rating }).map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                                <h4 className="testimonial-name">{item.name}</h4>
                                <span className="testimonial-role">{item.role}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

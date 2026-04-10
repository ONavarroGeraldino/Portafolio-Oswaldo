import { NavBar } from './components/NavBar';
import { SobreMi } from './components/SobreMi';
import ProjectCarousel from './components/ProjectCarousel';
import Tecno  from './components/Tecno';
import  Footer  from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      
      {/* Cada sección necesita un ID que coincida con el href del Nav */}
      <section id="sobre-mi">
        <SobreMi />
      </section>

      <section id="proyectos">
        <ProjectCarousel />
      </section>

      <section id="tecnologias">
        <Tecno />
      </section>

      <section id="contacto">
        <Footer />
      </section>
    </div>
  );
}

export default App;
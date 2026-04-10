import '../components/Navbar.css'
export function NavBar (){
  return(
   <nav className="navbar">
    <div className="logo">
        <a href="#">&lt;Dev&gt;</a>
    </div>
    
    <ul className="nav-links">
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#tecnologias">Stack</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li className="cta"><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
  )
}
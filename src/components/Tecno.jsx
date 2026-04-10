import React from 'react';
import { 
  FileJson, 
  FileCode, 
  FileType, 
  Code2, 
  Wind, 
  Atom, 
  Server 
} from 'lucide-react';
import './Tecno.css';

const Tecnologias = () => {
  const stack = [
    { name: 'JavaScript', icon: <FileJson />, class: 'js' },
    { name: 'HTML', icon: <FileCode />, class: 'html' },
    { name: 'CSS', icon: <FileType />, class: 'css' },
    { name: 'PHP', icon: <Server />, class: 'php' },
    { name: 'Laravel', icon: <Code2 />, class: 'laravel' },
    { name: 'Tailwind', icon: <Wind />, class: 'tailwind' },
    { name: 'React', icon: <Atom />, class: 'react' },
  ];

  return (
    /* El ID aquí debe coincidir exactamente con el href="#tecnologias" de tu Navbar */
    <section id="tecnologias" className="tech-container">
      <h2 className="tech-title">Tecnologías que sé usar</h2>
      
      <div className="tech-grid">
        {stack.map((techItem) => (
          <div key={techItem.name} className={`tech-card ${techItem.class}`}>
            <div className="tech-icon">
              {techItem.icon}
            </div>
            <span className="tech-name">{techItem.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tecnologias;
import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const elementTopOffset = elementRect.top;
      const windowHeight = window.innerHeight;
      const offset = Math.max(0, elementTopOffset - windowHeight / 4);

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <nav>
        <h2 className="logo">Portfolio</h2>
        <ul>
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')}>
              About Me
            </a>
          </li>
          <li>
            <a href="#work" onClick={(e) => handleScroll(e, 'work')}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
              Contact Me
            </a>
          </li>
          <li>
            <a href="#resume" onClick={(e) => handleScroll(e, 'resume')}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;


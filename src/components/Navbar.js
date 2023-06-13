import React from 'react';
import '../styles/Navbar.css'


function Navbar() {
  return (
    <div>
        <nav>
         <h2 class="logo">Portfolio</h2>
         <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact Me</a></li>
            <li><a href="#resume">Resume</a></li>
        </ul>
       </nav>

    </div>
  );
}

export default Navbar;

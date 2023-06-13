import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <div class="hero">
       <section class="content">
        <div>
        <h4>Hello, my name is</h4>
        <h1>Daelen Wall</h1>
        <h3>I am a Web Developer</h3>
        </div>
        <div class="headshot"></div>
       </section>
    </div>
  );
}

export default Header;
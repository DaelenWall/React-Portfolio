import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className="hero">
       <section className="content">
        <div>
        <h4>Hello, my name is</h4>
        <h1>Daelen Wall</h1>
        <h3>I am a Web Developer</h3>
        </div>
        <div className="headshot"></div>
       </section>
    </div>
  );
}

export default Header;
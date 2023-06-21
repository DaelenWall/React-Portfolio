import React, { useState } from 'react';
import '../styles/About.css';

function About() {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const toggleVisibility = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <section className="about">
      <div className="main">
        <section>
          <div className="about-text">
            <h1 id="about">
              About Me{' '}
              <button onClick={toggleVisibility}>
                {isParagraphVisible ? '▲' : '▼'}
              </button>
            </h1>
            {isParagraphVisible && (
              <p>
                My name is Daelen Wall and I am a 19-year-old web developer from Connecticut. I started coding in 2022 at UConn. I specialize in HTML and CSS and can provide clean code and impeccable web design.
              </p>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
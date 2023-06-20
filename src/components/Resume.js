import React from 'react';
import '../styles/Resume.css'


function Resume() {
  return (
    <section class="resume">
    <div class="resume-text">
        <h1 id="resume">Resume</h1>
        <h2>Experience</h2>
            <ul>
                <li>Happiness Is... Cafe, Greenwich — <em>Barista</em><sub> 2022-Present</sub></li>
                <li>Sharing Sacred Spaces, Greenwich — <em>Graphic Designer</em><sub> 2020-2022</sub></li>
                <li>Chelsea Piers Stamford, Stamford — <em>Counselor</em><sub> 2018-2020</sub></li>
                <li>Greenwich Youth Conservation Program, Greenwich — <em>Volunteer</em><sub> 2018</sub></li>
            </ul>
        <h3>Education</h3>
            <ul>
                <li>Greenwich High School, Greenwich<sub> 2017-2021</sub></li>
                <li>UCONN, Storrs<sub> 2022-Present</sub></li>
            </ul>
        <h4>Projects</h4>
            <ul>
                <li>COVID-19 Child Care<sub> 2019-2020</sub></li>
            </ul>
        <h5>Skills and Interests</h5>
            <ul>
                <li>Photoshop</li>
                <li>Adobe Premier</li>
                <li>Sports (Soccer)</li>
                <li>Statistics</li>
                <li>Front-end Web Development</li>
            </ul>
        <h6>Awards</h6>
            <ul>
                <li>Honor Roll Student</li>
                <li>High Honor Roll Student</li>
                <li>Honor Society — Greenwich High School</li>
            </ul>
    </div>
   
  </section>
  );
}

export default Resume;

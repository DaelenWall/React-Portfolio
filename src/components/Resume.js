import React, { useState } from 'react';
import '../styles/Resume.css'

function Resume() {
    const [isListVisible, setIsListVisible] = useState(false);

    const toggleVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    return (
        <section className="resume">
            <div className="resume-text">
                <h1 id="resume">Resume{' '}
                    <button onClick={toggleVisibility}>
                        {isListVisible ? '▲' : '▼'}
                    </button>
                </h1>
                {isListVisible && (
                    <div className="list-items">
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
                            <li>UCONN, Stamford<sub> 2022-Present</sub></li>
                        </ul>
                        <h4>Projects</h4>
                        <ul>
                            <li><a href='https://odobashigenci.github.io/Bites-n--booze/homepage.html'>Bites n' Booze</a></li>
                            <li><a href='https://cryptic-basin-19014.herokuapp.com/'>VibeTribe</a></li>
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
                )}
            </div>

        </section>
    );
}

export default Resume;

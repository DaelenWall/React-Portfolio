import React from 'react';
import '../styles/Work.css'


function Work() {
    return (
        <main>
            <section class="row justify-center">
                <div class="card-column">
                    <figure class="card code-card">
                        <h2 class="card-header">HTML and CSS</h2>
                        <div class="card-body">
                        </div>
                        <pre className="code-block">
                            <a href="https://github.com/DaelenWall/HTML-CSS-and-Git-Code-Refactor">Click to see my work in HTML and CSS!</a>
                        </pre>
                    </figure>
                </div>
                <div class="card-column">
                    <figure class="card code-card">
                        <h2 id="work" class="card-header">JavaScript</h2>
                        <div class="card-body">
                        </div>
                        <pre class="code-block">
                        <a href="https://github.com/DaelenWall/SVG-Logo-Maker">Click to see my work in JavaScript!</a>
                        </pre>
                    </figure>
                </div>

                <div class="card-column">
                    <figure class="card code-card">
                        <h2 class="card-header">APIs</h2>
                        <div class="card-body">
                        </div>
                        <pre class="code-block">
                        <a href="https://daelenwall.github.io/Weather-Dashboard/">Click to see my work with APIs!</a>
                        </pre>
                    </figure>
                </div>
                <div class="card-column">
                    <figure class="card code-card">
                        <h2 class="card-header">Node.js</h2>
                        <div class="card-body">
                        </div>
                        <pre class="code-block">
                        <a href="https://github.com/DaelenWall/Professional-README-Generator">Click to see my work in Node.js!</a>
                        </pre>
                    </figure>
                </div>
                <div class="card-column">
                    <figure class="card code-card">
                        <h2 class="card-header">NoSQL</h2>
                        <div class="card-body">
                        </div>
                        <pre class="code-block">
                        <a href="https://github.com/DaelenWall/Social-Network-API">Click to see my work in NoSQL!</a>
                        </pre>
                    </figure>
                </div>

                <div class="card-column">
                    <figure class="card code-card">
                        <h2 class="card-header">ORM</h2>
                        <div class="card-body">
                        </div>
                        <pre class="code-block">
                        <a href="https://github.com/DaelenWall/ORM-E-commerce-Back-End">Click to see my work in ORM!</a>
                        </pre>
                    </figure>
                </div>
            </section>
        </main >
    );
}

export default Work;
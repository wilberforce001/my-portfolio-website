import React from "react";
import '../styles/styles.css';

// Import each icon
import javascriptIcon from '../assets/javascript.png';
import pythonIcon from '../assets/python.png';
import vuejsIcon from '../assets/vue.png';
import nodejsIcon from '../assets/node.png';
import expressIcon from '../assets/express.png';
import reactIcon from '../assets/react.png';
import mongodbIcon from '../assets/mongodb.png';
import postgresIcon from '../assets/postgres.png';
import mysqlIcon from '../assets/mysql.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png'; 
import typescriptIcon from '../assets/typescript.png';
import tailwindIcon from '../assets/tailwind.png';
import bootstrapIcon from '../assets/bootstrap.png';



const SkillsPage = () => {
    return (
        <section id="skills">
            <h2>MY TALENT</h2>
            <p className="skills-heading">PROFESSIONAL SKILLS</p>
            <div className="skills-grid">
                <div className="skill-card">
                    <img src={htmlIcon} alt="Html" className="skill-icon" />
                    <p>Html</p>
                </div>
                <div className="skill-card">
                    <img src={cssIcon} alt="CSS" className="skill-icon" />
                    <p>CSS</p>
                </div>
                <div className="skill-card"> 
                    <img src={javascriptIcon} alt="JavaScript" className="skill-icon" />
                    <p>JavaScript</p>
                </div>
                <div className="skill-card">
                    <img src={pythonIcon} alt="Python" className="skill-icon" />
                    <p>Python</p>
                </div>
                <div className="skill-card">
                    <img src={nodejsIcon} alt="Node.js" className="skill-icon" />
                    <p>Node.js</p>
                </div>
                <div className="skill-card">
                    <img src={expressIcon} alt="Express" className="skill-icon" />
                    <p>Express</p>
                </div>
                <div className="skill-card">
                    <img src={reactIcon} alt="React" className="skill-icon" />
                    <p>React</p>
                </div>
                <div className="skill-card">
                    <img src={vuejsIcon} alt="Vue.js" className="skill-icon" />
                    <p>Vue.js</p>
                </div>
                <div className="skill-card">
                    <img src={mongodbIcon} alt="MongoDB" className="skill-icon" />
                    <p>MongoDB</p>
                </div>
                <div className="skill-card">
                    <img src={postgresIcon} alt="Postgres" className="skill-icon" />
                    <p>Postgres</p>
                </div>
                <div className="skill-card">
                    <img src={mysqlIcon} alt="MySQL" className="skill-icon" />
                    <p>MySQL</p>
                </div>
                <div className="skill-card">
                    <img src={typescriptIcon} alt="Typescript" className="skill-icon" />
                    <p>Typescript</p>
                </div>
                <div className="skill-card">
                    <img src={tailwindIcon} alt="Tailwind" className="skill-icon" />
                    <p>Tailwind</p>
                </div>
                <div className="skill-card">
                    <img src={bootstrapIcon} alt="Bootstrap" className="skill-icon" />
                    <p>Bootstrap</p>
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;

import React, { useState } from "react";
import '../styles/styles.css';


const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('education');

    const educationContent = (
        <div className="educationContent">
          <h2>My Education Journey</h2>
          <p className="journey-text">My educational journey has been rooted in a strong foundation in Actuarial Science, 
            which has equipped me with analytical and quantitative skills. Throughout my studies,
             I developed a deep understanding of mathematical principles, statistics, and risk assessment. 
             This academic background has not only honed my problem-solving abilities but also sparked my interest in software engineering, 
            leading me to pursue further learning and practical experience in this dynamic field.</p>
            <ul className="professional-journey">
            <li>
              <div className="professional-title">
                <h2>Kenyatta University</h2>
              </div>
              <div className="skills-year-container">
                <div className="skill-tags">
                  <span className="skill-tag">B.Sc. (Actuarial Science)</span>
                </div>
                <span className="year">July, 2021</span>
              </div>
              <div className="professional-title">
                <h2>European Business University of Luxembourg</h2>
              </div>
              <div className="skills-year-container">
                <div className="skill-tags">
                  <span className="skill-tag">Certificate in Mobile Application Development</span>
                </div>
                <span className="year">Sep. 2022 - May 2023</span>
              </div>
              <div className="professional-title">
                <h2>European Business University of Luxembourg</h2>
              </div>
              <div className="skills-year-container">
                <div className="skill-tags">
                  <span className="skill-tag">Certificate in Introduction to Python </span>
                </div>
                <span className="year">Jult 2022 - Oct. 2022</span>
              </div>
              <div className="professional-title">
                <h2>European Business University of Luxembourg</h2>
              </div>
              <div className="skills-year-container">
                <div className="skill-tags">
                  <span className="skill-tag">Certificate in Financial Accounting</span>
                </div>
                <span className="year">March 2022 - June 2022</span>
              </div>
            </li>
          </ul>
        </div>
      );
      const experienceContent = (
        <div className="prof-journey">
          <h2>My Professional Journey</h2>
          <p className="journey-text">
          Over the past two years, I have transitioned into software engineering, leveraging my analytical background in Actuarial Science. My journey has been characterized by self-directed learning and hands-on experience through an intensive two-week bootcamp, where I enhanced my skills in front-end and back-end development. Although I haven't yet worked in an organization, I've built a portfolio that showcases my ability to create functional UIs, manage authentication, and implement CRUD functionality. I am eager to find opportunities that align with my values and allow me to grow as a software engineer.
          </p>
          <ul className="professional-journey">
            <li>
              <div className="professional-title">
                <h2>Software Developer</h2>
              </div>
              <div className="skills-year-container">
                <div className="skill-tags">
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Vue.js</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                </div>
                <span className="year">2022</span>
              </div>
              <div className="description-container">
                <p className="description">Acquired in-depth knowledge of web development, focusing on building structured and responsive applications using HTML, CSS, and JavaScript. Developed proficiency in server-side programming with Node.js and Express, enabling the creation of scalable RESTful APIs.</p>
                <p className="description">Gained experience in modern front-end frameworks such as React and Vue.js, emphasizing component-based architecture and dynamic user interfaces. Enhanced code quality through the use of TypeScript, and mastered database management with both relational (Postgres, MySQL) and NoSQL (MongoDB) databases.</p>
                <p className="description">Applied modern CSS frameworks like Tailwind CSS and Bootstrap to create visually appealing and responsive designs, ensuring a seamless user experience.</p>
              </div>
            </li>
          </ul>
        </div>
      );
    return (
        <section id="about" class="about-section">
            <h2>ABOUT ME</h2>
            <h3>Bridging the Gap Between Users and Technology</h3>
            <div class="about-cards">
                <div class="card">
                <h4>I Design Solutions, Not Just Interfaces</h4>
                <p>I help businesses overcome the challenge of poor user experiences by creating responsive, intuitive, and user-centered web applications.</p>
                </div>
                <div class="card">
                <h4>Turning Complex into Simple</h4>
                <p>Through clean design and functional user journeys, I bridge the gap between users and technology, making digital products easy to navigate and impactful.</p>
                </div>
                <div class="card">
                <h4>Frontend Expertise for Better Engagement</h4>
                <p>With expertise in React, Tailwind CSS, and JavaScript, I craft responsive, high-performance web applications that engage users and enhance overall experiences.</p>
                </div>
                <div class="card">
                <h4>Human-Centered Design</h4>
                <p>Every project I undertake is guided by one goal: creating solutions that empower users and drive business growth.</p>
                </div>
            </div>

            <div className="about-section">
                <div className="button-section">
                    <button onClick={() => setActiveTab('education')} className="btn btn-primary">Education</button>
                    <button onClick={() => setActiveTab('experience')} className="btn btn-secondary">Experience</button>
                </div>
                <div>
                    {activeTab === 'education' ? educationContent : experienceContent}
                </div>
            </div>
        </section>
    );
};

export default AboutPage;


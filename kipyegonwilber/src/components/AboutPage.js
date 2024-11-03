import React, { useState } from "react";
import '../styles/styles.css';


const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('education');

    const educationContent = (
        <div className="educationContent">
          <h2>My Education Journey</h2>
          <p>With a degree in Disaster Preparedness and Environmental Technology from Masinde Muliro University <br />
             and mobile development training at Moringa School, my education has been a blend of technical expertise <br />
             and problem-solving. Here’s a timeline of the key milestones that have shaped my journey as a multidisciplinary developer.</p>
            <ul className="professional-journey">
            <li>
              <div className="professional-title">
                <h2>Software Developer</h2>
              </div>
              <div className="skills-year-container">
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Vue.js</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                </div>
                <span className="year">2022</span>
              </div>
              <div className="description-container">
                <p className="description">Acquired in-depth knowledge of Java, focusing on building efficient, high-performance Android applications.</p>
                <p className="description">Learned to use the Android SDK for app development and mastered Android-specific UI components to create responsive and user-friendly interfaces.</p>
                <p className="description">Gained experience with data storage techniques in Android, including SQLite databases, SharedPreferences, and content providers.</p>
                <p className="description">Developed a strong understanding of the Android app lifecycle and learned best practices for optimizing app performance and memory usage.</p>
              </div>
            </li>
          </ul>
        </div>
      );
      const experienceContent = (
        <div>
          <h2>My Professional Journey</h2>
          <p>With extensive experience in both full-time and consultancy roles, <br />
          I specialize in frontend development and user-centric design. Here's a timeline of <br />
           my journey and the projects I've contributed to along the way.</p>
          <ul className="professional-journey">
            <li>
              <div className="professional-title">
                <h2>Software Developer</h2>
              </div>
              <div className="skills-year-container">
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Vue.js</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                </div>
                <span className="year">2022</span>
              </div>
              <div className="description-container">
                <p className="description">Acquired in-depth knowledge of Java, focusing on building efficient, high-performance Android applications.</p>
                <p className="description">Learned to use the Android SDK for app development and mastered Android-specific UI components to create responsive and user-friendly interfaces.</p>
                <p className="description">Gained experience with data storage techniques in Android, including SQLite databases, SharedPreferences, and content providers.</p>
                <p className="description">Developed a strong understanding of the Android app lifecycle and learned best practices for optimizing app performance and memory usage.</p>
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


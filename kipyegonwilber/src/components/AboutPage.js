import React, { useState } from "react";
import '../styles/styles.css';


const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('education');

    const educationContent = (
        <div className="educationContent">
          <h2>My Education Journey</h2>
          <p className="journey-text text-secondary">My educational journey has been rooted in a strong foundation in Actuarial Science, 
            which has equipped me with analytical and quantitative skills. Throughout my studies,
             I developed a deep understanding of mathematical principles, statistics, and risk assessment. 
             This academic background has not only honed my problem-solving abilities but also sparked my interest in software engineering, 
            leading me to pursue further learning and practical experience in this dynamic field.</p>
          <ul className="educational-journey">
            <li>
            <div className="education-container">
              <div className="left-content">
                <h2>Kenyatta University</h2>
                <span className="degree text-secondary">B.Sc. (Actuarial Science)</span>
              </div>
              <span className="year text-secondary">July, 2021</span>
            </div>
            <div className="education-container">
              <div className="left-content">
                <h2>European Business University of Luxembourg</h2>
                <span className="degree text-secondary">Certificate in Mobile Application Development</span>
              </div>
              <span className="year text-secondary">May, 2023</span>
            </div>
            <div className="education-container">
              <div className="left-content">
                <h2>European Business University of Luxembourg</h2>
                <span className="degree text-secondary">Certificate in Introduction to Python</span>
              </div>
              <span className="year text-secondary">October, 2022</span>
            </div>
            <div className="education-container">
              <div className="left-content">
                <h2>European Business University of Luxembourg</h2>
                <span className="degree text-secondary">Certificate in Financial Accounting</span>
              </div>
              <span className="year text-secondary">June, 2022</span>
            </div>
            </li>
          </ul>
        </div>
      );
      const experienceContent = (
        <div className="prof-journey">
          <h2>My Professional Journey</h2>
          <p className="journey-text text-secondary">
          Over the past four years, I have transitioned into software engineering, leveraging my analytical background in Actuarial Science.
          My journey has been characterized by self-directed learning and hands-on experience through bootcamps, 
          where I enhanced my skills in front-end and back-end development. Although I haven't yet worked in an organization, 
          I've built a portfolio that showcases my ability to create functional UIs, manage authentication, and implement CRUD functionality. 
          This portfolio also showcases the diferent projects that I have worked on in my software engineering journey which demonstrate my skills and experience in this field. 
          I am eager to find opportunities that align with my values and allow me to grow as a software engineer.
          </p>
          <ul className="professional-journey">
            <li>
              <div className="prof-container">
                <div className="prof-left-content">
                  <h2>Software Developer</h2>
                  <span className="degree text-secondary">JavaScript|React|Vue.js|Node.js|Express</span>
                </div>
                <span className="year text-secondary">4 yrs</span>
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
            <h2 className="text-secondary mt-3">ABOUT ME</h2>
            <h3>Bridging the Gap Between Users and Technology</h3>
            <div class="about-cards">
              <div class="card col-lg-4 col-md-6 col-sm-12">
                <h4>I Build Scalable Web Applications</h4>
                <p>I have expertise in designing and developing scalable web applications that seamlessly handle user interactions, integrate with databases, and provide efficient data processing.</p>
              </div>
              <div class="card col-lg-4 col-md-6 col-sm-12">
                <h4>API Development and Integration</h4>
                <p>I am proficient in developing RESTful APIs to enable smooth communication between front-end and back-end systems, ensuring seamless integration with third-party services and data sources.</p>
              </div>
              <div class="card col-lg-4 col-md-6 col-sm-12">
                <h4>Data-Driven Decision-Making Solutions</h4>
                <p>I leverage my analytical skills to build data-driven applications that analyze complex datasets, generating actionable insights and facilitating informed decision-making for users.</p>
              </div>
              <div class="card col-lg-4 col-md-6 col-sm-12">
                <h4>User-Centered Interface Design</h4>
                <p>I Specialize in creating intuitive, responsive user interfaces that prioritize user experience, ensuring accessibility and ease of use while delivering powerful functionality.</p>
              </div>
            </div>

            <div>
                <div className="button-section">
                    <button onClick={() => setActiveTab('education')} className="btn btn-secondary">Education</button>
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


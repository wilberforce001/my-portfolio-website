import React from "react";
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter.png';

const ContactPage = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Connect With Me</h2>
            <div className="social-icons">
                <a href="https://github.com/wilberforce001" target="_blank" rel="noopener noreferrer" className="icon github" aria-label="GitHub">
                    <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
                <a href="https://x.com/KipyegonMisik" target="_blank" rel="noopener noreferrer" className="icon twitter" aria-label="Twitter">
                    <img src={twitterIcon} alt="Twitter" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/kipyegon-k-wilberforce-242370171/" target="_blank" rel="noopener noreferrer" className="icon linkedin" aria-label="LinkedIn">
                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                </a>
            </div>
            <p className="copyright">Copyright © 2024 Kipyegon Wilberforce Kenduiywo</p>
        </section>
    );
};

export default ContactPage;
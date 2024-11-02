import React from "react";
import { Button } from 'react-bootstrap';
import cursorIcon from '../assets/cursorIcon.svg';

const HomePage = () => {
    return (
        <section className="home d-flex flex-column justify-content-center align-items-center text-center vh-100">
            <div className="container">
                <h1 className="fs-8 lead text-secondary mb-5">
                DEDICATED TO CRAFTING ENGAGING AND FUNCTIONAL USER INTERFACES
                </h1>
                <p className="fs-24 display-4 fw-bold text-white mb-5">
                    Transforming Concepts into <br />
                    Seamless User Experiences
                </p>
                <p className="fs-5 text-secondary mb-5">
                    Hi! 👋🏾 I'm Wilberforce, a Fullstack Developer
                    blending tech with a touch of Actuarial precision <br />
                    to create sleek, user-focused web experiences.
                </p>

                <div className="button-container d-flex justify-content-center align-items-center">
                <Button variant="primary" className="d-flex align-items-center">
                    View My Work
                    <img src={cursorIcon} alt="Cursor Icon" style={{ marginLeft: '15px' }} width="20" height="20" />
                </Button>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
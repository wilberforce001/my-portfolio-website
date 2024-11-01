import React from "react";
import { Button } from 'react-bootstrap';
import cursorIcon from '../assets/cursorIcon.svg';

const HomePage = () => {
    return (
        <section className="home d-flex flex-column justify-content-center align-items-center text-center bg-light vh-100">
            <div className="container">
                <h1 className="lead text-secondary mb-3">
                Dedicated to Crafting Engaging and Functional User Interfaces                </h1>
                <p className="display-4 fw-bold text-dark mb-3">
                    Transforming Concepts into Seamless User Experiences
                </p>
                <p className="fs-5 text-muted">
                    Hi! 👋🏾 I'm Wilberforce, a Fullstack Developer with a background in Actuarial Science. 
                    I love building elegant, user-friendly web experiences that bring ideas to life.
                </p>
                <div className="d-flex justify-content-center align-items-center">
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
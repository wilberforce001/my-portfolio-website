import React from "react";
import appointmentIcon from '../assets/appointment.PNG';

const ProjectsPage = () =>{
    return(
        <section id="projects" className="projects-section">
        <h2>LATEST WORKS</h2>
        <p>EXPLORE MY CURRENT PROJECTS</p>
        <div className="projects-container">
            <div className="project-card">
                <img src={appointmentIcon} alt="Appointment" className="project-image" />
                <h3 className="project-title">Appointment Management System</h3>
                <p className="project-description">This is a comprehensive full-stack application that is used in the management and scheduling of appointments</p>
                <a href="https://appointment-management-system-2.onrender.com/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
                <img src={appointmentIcon} alt="Appointment" className="project-image" />
                <h3 className="project-title">Appointment Management System</h3>
                <p className="project-description">This is a comprehensive full-stack application that is used in the management and scheduling of appointments</p>
                <a href="https://appointment-management-system-2.onrender.com/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
                <img src={appointmentIcon} alt="Appointment" className="project-image" />
                <h3 className="project-title">Appointment Management System</h3>
                <p className="project-description">This is a comprehensive full-stack application that is used in the management and scheduling of appointments</p>
                <a href="https://appointment-management-system-2.onrender.com/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
        </section>
    );
};

export default ProjectsPage;
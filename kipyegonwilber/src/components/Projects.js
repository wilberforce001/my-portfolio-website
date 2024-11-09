import React from "react";
import appointmentIcon from '../assets/appointment.PNG';
import adminDashboardIcon from '../assets/adminDashboard.PNG';
import LibraryIcon from '../assets/library.PNG';
import healthcareIcon from '../assets/healthcare.PNG';

const ProjectsPage = () =>{
    return(
        <section id="projects" className="projects-section">
        <h2>LATEST WORKS</h2>
        <p className="projects-heading">EXPLORE MY CURRENT PROJECTS</p>
        <div className="projects-container">
            <div className="project-card">
                <img src={appointmentIcon} alt="Appointment" className="project-image" />
                <h3 className="project-title">Appointment Management System</h3>
                <p className="project-description">This is a comprehensive full-stack application that is used in the management and scheduling of appointments</p>
                <a href="https://appointment-management-system-2.onrender.com/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
                <img src={adminDashboardIcon} alt="Dashboard" className="project-image" />
                <h3 className="project-title">Admin Dashboard</h3>
                <p className="project-description">A responsive admin dashboard with a clean, user-friendly interface. 
                    Features a sidebar for easy navigation, a search bar, and sections for projects, announcements, 
                    and trending items. Built using HTML, CSS Grid, and Tailwind for a modern, structured layout.</p>
                <a href="https://wilberforce001.github.io/Project-Library/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
                <img src={healthcareIcon} alt="Library" className="project-image" />
                <h3 className="project-title">Healthcare Dashboard</h3>
                <p className="project-description">A comprehensive healthcare dashboard designed for managing patient data and healthcare metrics. 
                    It provides an intuitive interface with data visualizations, patient records, appointment scheduling, and health metrics tracking. 
                    Built with a focus on usability, the dashboard streamlines healthcare data management for better insights and decision-making.</p>
                <a href="https://xd.adobe.com/view/121254c9-532f-4772-a1ba-dfe529a96b39-4741/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a> 
            </div>
            <div className="project-card">
                <img src={LibraryIcon} alt="Library" className="project-image" />
                <h3 className="project-title">Library</h3>
                <p className="project-description">A digital library app allowing users to add, display, and manage a collection of books. 
                    Includes a form for new entries, toggles for read status, and options to delete books, 
                    providing a seamless, interactive experience for book management.</p>
                <a href="https://wilberforce001.github.io/Project-Library/library/library.html" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a> 
            </div>
        </div>
        </section>
    );
};

export default ProjectsPage;
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/Skills';
import ProjectsPage from './components/Projects';
import TestimonialsPage from './components/Testimonials';
import ContactPage from './components/Contact';


function App() {
  return (
    <Router>
        <NavigationBar />
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage /> 
        <TestimonialsPage />
        <ContactPage />
    </Router>
  );
}

export default App;

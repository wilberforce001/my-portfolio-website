import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';


function App() {
  return (
    <Router>
        <NavigationBar />
        <HomePage />
        <AboutPage />
    </Router>
  );
}

export default App;

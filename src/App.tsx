import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo  from './assets/logo-removebg-preview.png'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <header className="header-wrapper">
            <div className="img-header">
                <img src={Logo} alt="logo" />
            </div>
            <div className="header-btn-wrapper">
                <button className="header-how">How It Works</button>
                <button className="header-login">Log In</button>
                <button className="header-signup">Sign Up</button>
            </div>
          </header>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/registration" element={ <Registration /> } />
          </Routes>
          <footer className="footer-wrapper">
            <div className="footer-logo-wrapper">
                <FontAwesomeIcon icon="square-instagram" />
                <FontAwesomeIcon icon="square-snapchat" />
                <FontAwesomeIcon icon="square-twitter" />
                <FontAwesomeIcon icon="square-facebook" />
            </div>
            <div className="footer-btn-wrapper">
                <button className="footer-home">Home</button>
                <button className="footer-services">Services</button>
                <button className="footer-about">About</button>
                <button className="footer-terms">Terms</button>
                <button className="footer-privacy">Privacy Policy</button>
            </div>
            <div className="footer-company-wrapper">
                <p>YeahBuddy © 2022</p>
            </div>
          </footer>
        </Router>
    </div>
  );
}

export default App;

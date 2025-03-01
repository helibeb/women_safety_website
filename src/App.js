import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SOS from './components/SOS';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Education from './components/Education';
import './App.css';
import SafetyProducts from './components/SafetyProducts';
import PanicButton from './components/PanicButton';
import PepperSpray from './components/PepperSpray';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sos" element={<SOS />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/education" element={<Education />} />
                <Route path="/safety-products" element={<SafetyProducts />} />
                <Route path="/panic-button" element={<PanicButton />} />
                <Route path="/pepper-spray" element={<PepperSpray />} />
                {/* Add other routes here */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
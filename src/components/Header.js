import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Women Safety Hub</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sos">SOS & Tracker</Link></li>
                    <li><Link to="/education">Safety Education</Link></li>
                    <li><Link to="/mapping">Safety Mapping</Link></li>
                    <li><Link to="/community">Support Networks</Link></li>
                    <li><Link to="/hotspots">Incident Hotspots</Link></li>
                    <li><Link to="/reviews">Safety Product Reviews</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
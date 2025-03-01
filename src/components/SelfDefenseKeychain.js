import React from 'react';
import './SelfDefenseKeychain.css'; // Import the CSS file for styling

const SelfDefenseKeychain = () => {
    return (
        <div>
            <header>
                <h1>Self-Defense Keychain</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/sos">SOS & Tracker</a></li>
                        <li><a href="/safety-products">Safety Products</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <div className="content-container">
                <h2>What is a Self-Defense Keychain?</h2>
                <img
                    src="https://example.com/self-defense-keychain.jpg"
                    alt="Self-Defense Keychain"
                    style={{ width: '300px', height: '300px' }}
                />
                <p>
                    A self-defense keychain is a practical and discreet tool designed for personal protection. It can be attached to your keys and carried with you at all times, providing a quick and effective way to defend yourself in dangerous situations. These keychains often come in various forms, including small, pointed devices that can be used to strike or jab an attacker.
                </p>

                {/* Rest of the content */}
            </div>

            <footer>
                <p>&copy; 2024 Women Safety Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SelfDefenseKeychain;
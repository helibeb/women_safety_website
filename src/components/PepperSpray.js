import React from 'react';
import './PepperSpray.css'; // Import the CSS file for styling

const PepperSpray = () => {
    return (
        <div>
            <header>
                <h1>Pepper Spray</h1>
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
                <h2>What is Pepper Spray?</h2>
                <img src="https://example.com/pepper-spray.jpg" alt="Pepper Spray" />
                <p>
                    Pepper spray is a self-defense tool that contains oleoresin capsicum (OC), a chemical derived from chili peppers. When sprayed on an attacker, it causes temporary blindness, difficulty breathing, and intense burning sensations, allowing the victim to escape. Pepper spray is widely used for personal safety and is legal in many countries.
                </p>

                <h2>Features of Pepper Spray</h2>
                <ul>
                    <li>Compact and easy to carry</li>
                    <li>Quick and effective in disabling attackers</li>
                    <li>Available in various sizes and formulations</li>
                    <li>Non-lethal and safe for self-defense</li>
                    <li>Can be used at a safe distance from the attacker</li>
                </ul>

                <h2>Benefits of Using Pepper Spray</h2>
                <ul>
                    <li>Provides immediate protection in dangerous situations</li>
                    <li>Easy to use, even for individuals with no training</li>
                    <li>Non-lethal and minimizes the risk of permanent harm</li>
                    <li>Affordable and widely available</li>
                    <li>Can be carried discreetly in a purse or pocket</li>
                </ul>

                <h2>Use Cases for Pepper Spray</h2>
                <ul>
                    <li>Personal safety while walking alone at night</li>
                    <li>Protection against muggers or attackers</li>
                    <li>Self-defense for joggers, hikers, and cyclists</li>
                    <li>Safety for college students on campus</li>
                    <li>Emergency situations in public places</li>
                </ul>

                <h2>How to Use Pepper Spray</h2>
                <p>
                    To use pepper spray effectively, aim for the attacker's face and press the button to release the spray. Ensure you are at a safe distance (typically 6-10 feet) and avoid spraying into the wind. After use, move away quickly and seek help. It is essential to practice using pepper spray to ensure you can deploy it quickly in an emergency.
                </p>

                <h2>Where to Buy Pepper Spray</h2>
                <p>
                    Pepper spray can be purchased from online retailers, security stores, or local pharmacies. Be sure to check local laws regarding the purchase and possession of pepper spray. For recommendations, visit our <a href="/safety-products">Safety Products</a> page.
                </p>
            </div>

            <footer>
                <p>&copy; 2024 Women Safety Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PepperSpray;
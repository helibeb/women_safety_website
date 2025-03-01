import React from 'react';
import './PanicButton.css'; // Import the CSS file for styling

const PanicButton = () => {
    return (
        <div>
            <header>
                <h1>Panic Buttons</h1>
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
                <h2>What is a Panic Button?</h2>
                <img src="https://example.com/panic-button.jpg" alt="Panic Button" />
                <p>
                    A panic button is a small, portable device designed to alert others in case of an emergency. When pressed, the button triggers an alarm, sends a distress signal, or alerts emergency contacts, depending on the configuration. Panic buttons are widely used in various settings, including homes, workplaces, and public spaces, to provide quick access to help when needed.
                </p>

                <h2>Features of Panic Buttons</h2>
                <ul>
                    <li>Compact and portable design</li>
                    <li>Easy to activate in an emergency</li>
                    <li>Loud alarm to deter attackers and attract attention</li>
                    <li>Can be connected to mobile devices for GPS tracking</li>
                    <li>Water-resistant and durable construction</li>
                    <li>Available in various forms such as keychains, wristbands, and pendants</li>
                </ul>

                <h2>Benefits of Using a Panic Button</h2>
                <ul>
                    <li>Provides immediate access to help in emergencies</li>
                    <li>Increases personal safety and security</li>
                    <li>Offers peace of mind to the user and their loved ones</li>
                    <li>Can be integrated with home security systems</li>
                    <li>Enhances the safety of vulnerable individuals, such as elderly or disabled persons</li>
                </ul>

                <h2>Use Cases for Panic Buttons</h2>
                <ul>
                    <li>Personal safety while walking alone at night</li>
                    <li>Protection against domestic violence</li>
                    <li>Emergency situations in schools or workplaces</li>
                    <li>Supporting elderly individuals living alone</li>
                    <li>Travel safety for tourists in unfamiliar areas</li>
                </ul>

                <h2>How to Use a Panic Button</h2>
                <p>
                    Using a panic button is straightforward. In case of an emergency, press the button firmly. Depending on the device, it may emit a loud sound, send an alert to your emergency contacts, or connect with emergency services. It is essential to test the panic button after purchasing it to ensure it functions correctly.
                </p>

                <h2>Where to Buy Panic Buttons</h2>
                <p>
                    Panic buttons can be purchased from online retailers, security companies, or electronics stores. Be sure to choose a reputable brand and check for features that meet your specific needs. For those interested in purchasing panic buttons, visit our <a href="/safety-products">Safety Products</a> page for recommendations.
                </p>
            </div>

            <footer>
                <p>&copy; 2024 Women Safety Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PanicButton;
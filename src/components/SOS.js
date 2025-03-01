import React, { useState } from 'react';
import Header from './Header'; // Import the Header component
import './SOS.css'; // Import the CSS file for styling

const SOS = () => {
    const [sosNumber, setSosNumber] = useState('');

    const saveSOSNumber = () => {
        if (sosNumber.length === 10) {
            localStorage.setItem("sosNumber", sosNumber);
            alert("SOS contact number saved successfully!");
        } else {
            alert("Please enter a valid 10-digit phone number.");
        }
    };

    const sendSOS = () => {
        const savedNumber = localStorage.getItem("sosNumber");
        if (savedNumber) {
            alert(`SOS Sent to ${savedNumber}! Your emergency contacts have been notified.`);
        } else {
            alert("No SOS contact number saved. Please enter a number.");
        }
    };

    return (
        <>
            <Header /> {/* Include the Header component */}
            <div className="sos-page">
                <div className="sos-container">
                    <h2>Emergency SOS & Real-Time Tracking</h2>
                    <p>If you are in an emergency, press the SOS button below. Your location will be sent to your emergency contacts immediately.</p>
                    <form onSubmit={(e) => { e.preventDefault(); saveSOSNumber(); }}>
                        <input
                            type="text"
                            value={sosNumber}
                            onChange={(e) => setSosNumber(e.target.value.replace(/[^0-9]/g, ''))}
                            placeholder="Enter your SOS contact number"
                            maxLength="10"
                            required
                        />
                        <button type="submit">Save Contact</button>
                    </form>
                    <br />
                    <button onClick={sendSOS}>Send SOS</button>
                    <p>Your location: <span id="location">28.6139° N, 77.2090° E</span></p>
                    <img src="images/sos_tracker.jpg" alt="SOS & Tracker" />
                </div>
            </div>
        </>
    );
};

export default SOS;
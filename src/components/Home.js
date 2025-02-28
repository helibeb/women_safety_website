import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <section id="sos" className="feature-section">
                <h2>Real-Time Assistance & Tracking</h2>
                <p><b>Empowering women with real-time safety assistance and tracking for immediate support and protection.</b></p>
                <Link to="/sos">
                    <button>Send SOS</button>
                </Link>
            </section>

            <section id="education" className="feature-section">
                <h2>Safety Education & Community Engagement</h2>
                <p><b>Empowering communities through safety education and active engagement to protect women from threats.</b></p>
                <img src="https://cdn.educba.com/academy/wp-content/uploads/2023/12/Safety-of-Women-in-India.jpg.webp" alt="Safety Education" />
                <a href="https://swayam.info/" target="_blank" rel="noopener noreferrer">
                    <button>Access Resources</button>
                </a>
            </section>

            {/* Add other sections similarly */}
        </main>
    );
};

export default Home;
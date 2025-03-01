import React from 'react';
import { Link } from 'react-router-dom'
import './SafetyProducts.css'; // Import the CSS file for styling

const SafetyProducts = () => {
    return (
        <main> {/* Wrap the content in a main tag */}
            <section id="reviews" className="safety-products-section">
                <h2>About Safety Products</h2>

                <div className="product-review">
                    <h3>Panic Button</h3>
                    <p>
                        <b>
                            The panic button is a compact and portable device that emits a loud noise when activated. It's perfect for deterring potential threats and drawing attention in case of emergencies. It's easy to carry and can be attached to keys, bags, or belts...
                        </b>
                    </p>
                    <Link to="/panic-button">
                        <button>Read More</button>
                    </Link>
                </div>

                <div className="product-review">
                    <h3>Pepper Spray</h3>
                    <p>
                        <b>
                            Pepper spray is one of the most popular self-defense tools. It's easy to use and effective in temporarily incapacitating an attacker, allowing the user to escape. This review covers the best brands, usage tips, and legal considerations...
                        </b>
                    </p>
                    <Link to="/pepper-spray">
                        <button>Read More</button>
                    </Link>
                </div>

                <div className="product-review">
                    <h3>Self-Defense Keychain</h3>
                    <p>
                        <b>
                            The self-defense keychain is a discreet and practical tool designed for personal protection. It can be used to strike or jab in self-defense situations. This review highlights the effectiveness, design, and user experiences...
                        </b>
                    </p>
                    <a href="https://medium.com/@DefenderDiana/empowering-safety-the-essential-guide-to-self-defense-keychains-for-women-3c2884de9a59" target="_blank" rel="noopener noreferrer">
                        <button>Read More</button>
                    </a>
                </div>
            </section>
        </main>
    );
};

export default SafetyProducts;
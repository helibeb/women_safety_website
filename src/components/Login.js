import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css'; // Import the CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (e) => {
        e.preventDefault();

        // Add login logic here (e.g., validate credentials)
        if (email && password) {
            // Simulate a successful login
            alert('Login successful! Redirecting to Home page...');

            // Redirect to the Home page
            navigate('/'); // Use navigate to switch to the Home page
        } else {
            alert('Please enter valid email and password.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login to Women Safety Hub</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="signup-link">
                    <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
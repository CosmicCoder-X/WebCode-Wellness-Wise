// src/pages/Home.js
import React from 'react';
import './Home.css'; // Import the Home-specific CSS

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>Welcome to Your Health and Wellness App</h1>
        <p>Track your daily activities, log your mood, and set health goals.</p>
        <button className="hero-button">Get Started</button>
      </div>

      <div className="home-features">
        <div className="feature-card">
          <h2>Activity Logger</h2>
          <p>Log your daily exercise, sleep, and meals to stay on track.</p>
        </div>
        <div className="feature-card">
          <h2>Mood Tracker</h2>
          <p>Record your emotions to understand your mental well-being.</p>
        </div>
        <div className="feature-card">
          <h2>Health Tips</h2>
          <p>Access curated articles and videos for healthy living.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from "react";
import "../style/about.css";


const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Trip Planner</h1>
          <p>Plan your perfect trips effortlessly and create memories that last a lifetime.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Trip Planner?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Easy Itinerary</h3>
            <p>Plan your day-to-day trips with a simple, intuitive interface.</p>
          </div>
          <div className="card">
            <h3>Discover Destinations</h3>
            <p>Find popular attractions and hidden gems to make your journey special.</p>
          </div>
          <div className="card">
            <h3>Budget-Friendly</h3>
            <p>Keep track of your travel expenses and plan smartly.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Sign up and create your profile.</li>
          <li>Choose your destination and dates.</li>
          <li>Plan your itinerary and activities.</li>
          <li>Share your plan with friends and family.</li>
        </ol>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Start Planning Your Trip Today!</h2>
        <p>Your next adventure awaits. Let’s make it unforgettable.</p>
        <a href="/" className="cta-btn">Plan a Trip</a>
      </section>
    </div>
  );
};

export default About;

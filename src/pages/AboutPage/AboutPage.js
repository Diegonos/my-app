import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          At Little Lemon, we bring the taste of the Mediterranean to the heart of Chicago. 
          Our restaurant is family-owned and dedicated to serving fresh, authentic, and flavorful dishes.
        </p>
      </section>

      {/* Our story */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2010, Little Lemon has become a favorite spot for locals and visitors alike. 
          Our mission is to provide a cozy atmosphere paired with dishes that are both traditional 
          and innovative, using the freshest ingredients sourced locally.
        </p>
      </section>

      {/* Meet the team */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <ul className="team-list">
          <li>
            <h3>John Smith</h3>
            <p>Head Chef</p>
          </li>
          <li>
            <h3>Maria Lopez</h3>
            <p>Pastry Chef</p>
          </li>
          <li>
            <h3>Ali Khan</h3>
            <p>Sous Chef</p>
          </li>
        </ul>
      </section>

      {/* Our values */}
      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Fresh and locally sourced ingredients</li>
          <li>Authenticity in every dish</li>
          <li>Exceptional customer service</li>
          <li>Warm and welcoming atmosphere</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;

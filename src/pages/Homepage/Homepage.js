import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Puoi creare un file CSS separato per lo stile

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Little Lemon</h1>
          <p>
            Experience the finest Mediterranean cuisine in the heart of Chicago. 
            Fresh ingredients, cozy atmosphere, and flavors that will delight your taste buds.
          </p>
          <Link to="/booking" className="btn-reserve">
            Book a Table
          </Link>
        </div>
      </section>

      {/* Featured dishes section */}
      <section className="featured-dishes">
        <h2>Our Specialties</h2>
        <div className="dishes-grid">
          <div className="dish-card">
            <img src="/dish1.jpeg" alt="Dish 1" />
            <h3>Grilled Octopus</h3>
          </div>
          <div className="dish-card">
            <img src="/dish2.jpeg" alt="Dish 2" />
            <h3>Lamb Kofta</h3>
          </div>
          <div className="dish-card">
            <img src="/dish3.jpeg" alt="Dish 3" />
            <h3>Falafel Platter</h3>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="about">
        <h2>About Little Lemon</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant serving authentic dishes 
          made from fresh ingredients. Our chefs bring flavors from the Mediterranean region 
          straight to your plate. Come and enjoy a warm and welcoming atmosphere!
        </p>
      </section>

      {/* Call to action */}
      <section className="cta">
        <h2>Reserve Your Table Today</h2>
        <Link to="/booking" className="btn-reserve">
          Book Now
        </Link>
      </section>
    </div>
  );
};

export default Homepage;

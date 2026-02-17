import React from "react";
import { useNavigate } from "react-router-dom";
import '../../style/LandingPage.css';
import heroImage from '../../assets/hero-coffee.webp';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      id="hero"
    >
      <div className="hero-content">
        <h1>Welcome to Our Cafe</h1>
        <p>Enjoy the best coffee and snacks in town</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate("/feauredDrinks")}>
            Explore Menu
          </button>
          <button className="btn-secondary" onClick={() => navigate("/login")}>
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

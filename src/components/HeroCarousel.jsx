import React from 'react';

// The HeroSection component receives a "hero" object as a prop.
// This object contains the title, subtitle, and background image URL.
const HeroSection = ({ hero }) => {
  
  // We create a style object here to dynamically set the background image.
  // This is the best way to use a prop to define a background.
  const sectionStyle = {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${hero.backgroundImageUrl})
    `
  };

  return (
    // We apply the dynamic style to the section element.
    <section className="hero-section" style={sectionStyle}>
      <div className="hero-content">
        <h1 className="hero-title">{hero.title}</h1>
        <p className="hero-subtitle">{hero.subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
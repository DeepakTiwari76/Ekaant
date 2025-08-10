import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// This component receives the "intro" object from our JSON data as a prop.
const IntroSection = ({ intro }) => {
  return (
    // We use a <section> tag for semantic HTML.
    <section className="intro-section">
      <div className="container intro-container">
        
        {/* Left Column: Text Content */}
        <div className="intro-text">
          <h2 className="intro-title">{intro.title}</h2>
          
          {/* We loop through the description array from our JSON file to create the paragraphs. */}
          {intro.description.map((paragraph, index) => (
            <p key={index} className="intro-description">
              {paragraph}
            </p>
          ))}

          <Link href={intro.button.href} className="intro-button">
            {intro.button.text} &rarr; {/* The &rarr; creates a right arrow */}
          </Link>
        </div>

        {/* Right Column: Image */}
        <div className="intro-image-wrapper">
          <Image
            src={intro.imageUrl}
            alt="A serene view at Ekaant farmstay"
            width={500} // We provide base dimensions
            height={500} // The CSS will make it responsive
            className="intro-image"
          />
        </div>

      </div>
    </section>
  );
};

export default IntroSection;
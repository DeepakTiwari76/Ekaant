import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// We receive the "offerings" object from our JSON data.
const OfferingsSection = ({ offerings }) => {
  return (
    <section className="offerings-section">
      <div className="container offerings-container">

        {/* Section Title */}
        <h2 className="section-title">{offerings.title}</h2>

        {/* Grid of Offering Items */}
        <div className="offerings-grid">
          {/* We loop through the "items" array from our JSON data */}
          {offerings.items.map((item) => (
            <div key={item.title} className="offering-item">
              <div className="offering-image-wrapper">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="offering-image"
                />
              </div>
              <h3 className="offering-title">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* "Book Now" Button */}
        <div className="offerings-button-wrapper">
          <Link href={offerings.button.href} className="intro-button">
            {offerings.button.text} &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
};

export default OfferingsSection;
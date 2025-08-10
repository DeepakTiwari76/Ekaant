import React from 'react';
import Image from 'next/image';

const ReachSection = ({ reach }) => {
  return (
    <section className="reach-section">
      <div className="container reach-container">
        
        {/* The Image Wrapper now ONLY contains the image */}
        <div className="reach-image-wrapper">
          {/* THE H2 TITLE HAS BEEN DELETED FROM HERE */}
          <Image
            src={reach.mapImageUrl}
            alt="Map illustration showing how to reach Ekaant"
            width={500}
            height={500}
            className="reach-image"
          />
        </div>

        {/* The Text column remains unchanged */}
        <div className="reach-text">
          {reach.sections.map((section) => (
            <div key={section.title} className="reach-category">
              <h3 className="reach-category-title">{section.title}</h3>
              <ul className="reach-points-list">
                {section.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ReachSection;
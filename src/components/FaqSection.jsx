// USE CLIENT FOR INTERACTIVITY
"use client"; 

import React, { useState } from 'react';
import FaqItem from './FaqItem.jsx';

const FaqSection = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container faq-container">
        
        {/* The title now has a wrapper for the decorative lines */}
        <div className="faq-title-wrapper">
          <div className="line"></div>
          <h2 className="section-title faq-main-title">{faq.title}</h2>
          <div className="line"></div>
        </div>
        
        {/* THIS IS THE NEW TWO-COLUMN GRID CONTAINER */}
        <div className="faq-grid">
          {faq.items.map((item, index) => (
            <FaqItem 
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
import React from 'react';

// This component receives the question, answer, whether it's currently open,
// and a function to call when it's clicked.
const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onClick}>
        <span>{item.question}</span>
        {/* The little arrow will rotate based on the isOpen state */}
        <span className={`faq-arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </button>
      {/* The answer div will be shown or hidden with CSS based on the isOpen state */}
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
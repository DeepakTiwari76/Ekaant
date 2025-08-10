import React from 'react';

const Footer = ({ footer }) => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        {/* Left Column: Title with specific line breaks */}
        <div className="footer-content">
          <h3 className="footer-title">
            {/* We map over the title array and use <br /> for line breaks */}
            {footer.title.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h3>
        </div>

        {/* Right Column: Contact Details with labels */}
        <div className="footer-contact">
          <p>
            <span className="contact-label">CALL/WHATSAPP:</span>
            {footer.contact.phone}
          </p>
          <p>
            <span className="contact-label">EMAIL:</span>
            {footer.contact.email}
          </p>
          <p>
            <span className="contact-label">INSTAGRAM:</span>
            {footer.contact.instagram}
          </p>
          <p>
            <span className="contact-label">LOCATION:</span>
            {footer.contact.location}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
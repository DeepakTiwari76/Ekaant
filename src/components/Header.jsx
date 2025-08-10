// We need state for the mobile menu, so this must be a Client Component
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ logoUrl, navLinks }) => {
  // State to manage if the mobile navigation is open or closed
  const [isNavOpen, setIsNavOpen] = useState(false);

  // This prevents scrolling the body when the mobile menu is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isNavOpen]);

  return (
    <header className="header">
      <div className="container">
        <Link href="/" onClick={() => setIsNavOpen(false)}>
          <Image src={logoUrl} alt="Ekaant Logo" width={140} height={70} className="logo" />
        </Link>
        
        {/* The navigation now has a class that changes when the menu is open */}
        <nav className={`navigation ${isNavOpen ? 'nav-open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.title}>
                {/* Clicking a link will also close the mobile menu */}
                <Link href={link.href} onClick={() => setIsNavOpen(false)}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* This is the Hamburger Menu button - it's only visible on mobile via CSS */}
        <button 
          className="nav-toggle" 
          aria-label="toggle navigation"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
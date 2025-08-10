import { Poppins } from 'next/font/google';
import '../styles/globals.css';

import homepageData from '../data/homepage.json';

// Import Components
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx'; // 1. Add this import

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] 
});

export const metadata = {
  title: 'Ekaant - Agro Tourism Retreat',
  description: 'A Sustainable Rest & Full-Fillness Wellness',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = homepageData;

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header logoUrl={data.header.logoUrl} navLinks={data.header.navLinks} />
        <main>
          {children}
        </main>
        {/* 2. Add the Footer here, passing the footer data from our JSON file */}
        <Footer footer={data.footer} />
      </body>
    </html>
  );
}
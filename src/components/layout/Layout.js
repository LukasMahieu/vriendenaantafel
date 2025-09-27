import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, isHomePage = false }) => {
  useEffect(() => {
    // Only add scroll behavior for activity pages (non-homepage)
    if (!isHomePage) {
      // Scroll to top when activity page loads - use multiple methods for reliability
      window.scrollTo(0, 0);

      // Also try with a small delay in case of timing issues
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 100);
    }
  }, [isHomePage]);

  // Don't render header in Layout for homepage - homepage handles its own header
  if (isHomePage) {
    return (
      <>
        <main className="font-vat text-vat-smalltext bg-vat-background">{children}</main>
        <Footer/>
      </>
    );
  }

  return (
    <>
      {/* Header - always visible on activity pages */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main className="font-vat text-vat-smalltext bg-vat-background">{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;

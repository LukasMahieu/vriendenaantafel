import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main className="text-vat-smalltext bg-vat-background">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

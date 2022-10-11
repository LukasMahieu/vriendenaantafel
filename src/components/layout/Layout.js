import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main className="text-green-800 bg-yellow-100">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

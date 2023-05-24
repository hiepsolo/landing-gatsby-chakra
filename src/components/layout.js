import PropTypes from 'prop-types';
import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children, bookDemo }) => {
  return (
    <>
      <Header bookDemo={() => bookDemo()}/>
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

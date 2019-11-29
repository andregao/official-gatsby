import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-family: Helvetica, sans-serif, Arial;
  }
`;

export default Layout;

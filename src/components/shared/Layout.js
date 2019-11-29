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
    
    // variables
    --hero-text-color-light: white;
    --icon-color-on-light: black;
    --icon-color-on-dark: white;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    &:visited, &:link, &:active {
      color:inherit;
    }
  }
`;

export default Layout;

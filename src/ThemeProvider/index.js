import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";

export const GlobalStyle = createGlobalStyle`
  #root, html, body, main {
    height: 100%;
  }
  /* ScrollBar */
  :not(html):not(body)::-webkit-scrollbar {width: 7px;height: 3px;}
  :not(html):not(body)::-webkit-scrollbar-track {border-radius: 3.5px;background-color: transparent; }
  :not(html):not(body)::-webkit-scrollbar-thumb {background: ${({ theme }) => theme.colors.infoColor};border-radius: 3.5px;}
  :not(html):not(body)::-webkit-scrollbar-thumb:hover {background: ${({ theme }) => theme.colors.infoColor};}
  * {-webkit-overflow-scrolling:touch; -ms-overflow-style: -ms-autohiding-scrollbar; }
  /* ScrollBar */
`;

const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    linkColor: "#0580c7",
    infoColor: "#646464",
  },
  fontSizes: {
    extraSmall: "10px",
    tiny: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    extraLarge: "22px",
    title: "32px",
  },
};

export const AppContainer = styled.div`
  position: relative;
  padding: 16px;
  border-radius: 4px;
  width: 1300px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const MainWrapper = styled.main`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 600px;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 16px;
`;

const MainThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

MainThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainThemeProvider;
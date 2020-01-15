import PropTypes from "prop-types";
import { backgroundTheme, primaryColorTheme } from "../../theme";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "header header"
    "nav main";

  height: 100vh;

  header {
    background: ${primaryColorTheme};
    grid-area: header;
    position: fixed;
    height: 80px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99999;
  }

  nav {
    background: #fff;
    box-shadow: 0 3px 6px rgba(3, 27, 78, 0.1);
    border-right: 1px solid #eee;
    z-index: 1;
    grid-area: nav;
    height: 100%;
    top: 80px;
    width: 300px;
    z-index: 99999;
    position: fixed;
    -webkit-font-smoothing: antialiased !important;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    overflow-y: auto;
  }

  main {
    background: ${backgroundTheme};
    grid-area: main;
  }

  @media screen and (max-width: 768px) {
    grid-template-rows: 80px auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main";

    nav {
      grid-area: header;
      position: fixed;
      left: 0px;
      top: 0;
      z-index: 999999;
      width: calc(100% - 75px);
      bottom: 0;
    }

    .opened {
      transition: left 0.35s ease-in-out;
      left: 0px;
    }

    .closed {
      transition: left 0.35s ease-in-out;
      left: -100%;
    }
  }
`;

Container.propTypes = {
  variant: PropTypes.oneOf(["dashboard", "signIn", "SignUp"])
};

Container.defaultProps = {
  variant: "dashboard"
};

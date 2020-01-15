import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { withTheme } from "styled-components";

import { Container } from "./styles";
import { Header, SideBar, Footer } from "./components";
import { isAuthenticated } from "../../auth";

const Dashboard = props => {
  const { children, title } = props;

  useEffect(() => {
    document.title = title;
  });

  return isAuthenticated() === true ? (
    <Container>
      <header>
        <Header />
      </header>
      <nav id="navBar" className="closed">
        <SideBar />
      </nav>
      <main>
        {children}
        <footer>
          <Footer />
        </footer>
      </main>
    </Container>
  ) : (
    <Redirect to="/" />
  );
};

Dashboard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default withTheme(Dashboard);

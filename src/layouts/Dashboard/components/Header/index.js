import React from "react";
import { withTheme } from "styled-components";
import { Container } from "./styles";

import { Link } from "react-router-dom";

import {
  MdEmail,
  MdNotifications,
  MdKeyboardArrowDown,
  MdPerson
} from "react-icons/md";

import useSideBarState from "../../../../hooks/useSideBarState";

const Header = props => {
  const [openMenu, setOpenMenu] = useSideBarState(null);

  return (
    <Container>
      <header>
        <div className="logo">
          <img alt="Logo" src="/images/logo.png"></img>
        </div>
        <div className="open-side-bar">
          <div
            className="btn not-active"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/change-password">
                <MdEmail size={26} color="#fff" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <MdNotifications size={26} color="#fff" />
              </Link>
            </li>
            <li className="dropdown">
              <a
                href="#!"
                onClick={e => e.preventDefault()}
                className="dropbtn"
              >
                <MdPerson size={26} color="#fff" />
                <span>Felipe Lunardi</span>
                <MdKeyboardArrowDown size={16} color="#fff" className="arrow" />
              </a>
              <div className="dropdown-content">
                <Link to="/dashboard">Change Password</Link>
                <Link to="/dashboard">LOGOUT</Link>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </Container>
  );
};

export default withTheme(Header);

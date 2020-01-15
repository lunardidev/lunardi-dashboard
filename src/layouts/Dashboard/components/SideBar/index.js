import React from "react";
import { withTheme } from "styled-components";
import { Link, useLocation } from "react-router-dom";

import {
  MdDashboard,
  MdSettings,
  MdLockOutline,
  MdPermIdentity,
  MdLocalGroceryStore
} from "react-icons/md";
import { Container } from "./styles";

import useSideBarState from "../../../../hooks/useSideBarState";

const SideBar = props => {
  const { pathname } = useLocation();

  const [openMenu, setOpenMenu] = useSideBarState(null);

  const menu = [
    {
      title: "Dashboard",
      pathname: "/dashboard",
      icon: <MdDashboard size={24} />
    },
    {
      title: "Sign Up",
      pathname: "/sign-up",
      icon: <MdLockOutline size={24} />
    },
    {
      title: "Sign In",
      pathname: "/sign-in",
      icon: <MdLockOutline size={24} />
    },
    {
      title: "Change Password",
      pathname: "/change-password",
      icon: <MdSettings size={24} />
    },
    {
      title: "Store",
      pathname: "/store",
      icon: <MdLocalGroceryStore size={24} />
    },
    {
      title: "Logout",
      pathname: "/logout",
      icon: <MdPermIdentity size={24} />
    }
  ];

  const handleClick = event => {
    const itensMenu = document.getElementsByClassName("side-bar-item");
    for (const n in itensMenu) {
      try {
        itensMenu[n].firstChild.classList.remove("active");
      } catch (e) {}
    }
    event.target.classList.add("active");

    setOpenMenu(!openMenu);
  };

  let params = new URLSearchParams();
  console.log(params);

  return (
    <Container>
      <div className="user">
        <img
          alt="User Avatar"
          className="avatar"
          src="https://avatars3.githubusercontent.com/u/51406968?s=460&v=4"
        />
        <h4>felipe@lunardi.dev</h4>
        <p>Front-End Developer</p>
        <hr />
      </div>
      <ul className="side-bar">
        {menu.map(item => (
          <li className="side-bar-item" key={item.pathname}>
            <Link
              className={item.pathname === pathname ? "active" : null}
              to={item.pathname}
              onClick={handleClick}
            >
              {item.icon}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default withTheme(SideBar);

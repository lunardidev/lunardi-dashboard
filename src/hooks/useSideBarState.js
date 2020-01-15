import { useState, useEffect } from "react";

const useSideBarState = status => {
  const [menu, setMenu] = useState(status);
  useEffect(() => {
    if (menu === true || menu === false) {
      openSideBar(!sideBarStatus());
    }
  }, [menu]);

  return [menu, setMenu];
};

const openSideBar = status => {
  const navbar = document.getElementById("navBar");
  const menuIcone = document.getElementsByClassName("open-side-bar");

  if (status === true) {
    //document.body.style.overflow = "hidden";
    navbar.classList.remove("closed");
    navbar.classList.add("opened");

    menuIcone[0].firstChild.classList.remove("not-active");
    menuIcone[0].firstChild.classList.add("active");
  } else {
    //document.body.style.overflow = "";
    navbar.classList.remove("opened");
    navbar.classList.add("closed");

    menuIcone[0].firstChild.classList.remove("active");
    menuIcone[0].firstChild.classList.add("not-active");
  }
};

const sideBarStatus = () => {
  try {
    const navbar = document.getElementById("navBar");

    if (navbar.classList.contains("opened")) {
      return true;
    } else if (navbar.classList.contains("closed")) {
      return false;
    } else {
      return true;
    }
  } catch (e) {
    return false;
  }
};

export default useSideBarState;

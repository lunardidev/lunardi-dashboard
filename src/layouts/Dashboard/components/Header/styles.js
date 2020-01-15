import styled from "styled-components";

import { secondaryColorTheme } from "../../../../theme";

export const Container = styled.div`
  header {
    padding: 0 20px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      img {
        width: 35%;

        @media only screen and (max-width: 768px) {
          width: 45%;
        }
      }
    }

    .open-side-bar {
      position: absolute;
      right: 10px;
      top: 45px;
      display: none;

      @media only screen and (max-width: 768px) {  
        display: block;
        z-index: 99990;
      }

      .btn {
        width: 26px;
        height: 26px;
        cursor: pointer;
        transform: translate(-50%, -50%);
      }

      span {
        display: block;
        width: 100%;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
        border-radius: 2px;
        height: 2px;
        background: #fff;
        transition: all 0.3s;
        position: relative;
      }

      span + span {
        margin-top: 5px;
      }

      .active {
        span {
          &:nth-child(1) {
            background: #fff;
            animation: ease 0.7s top forwards;
          }

          &:nth-child(2) {
            background: #fff;
            animation: ease 0.7s scaled forwards;
          }

          &:nth-child(3) {
            background: #fff;
            animation: ease 0.7s bottom forwards;
          }
        }
      }

      .not-active {
        span {
          &:nth-child(1) {
            animation: ease 0.7s top-2 forwards;
          }
          &:nth-child(2) {
            animation: ease 0.7s scaled-2 forwards;
          }

          &:nth-child(3) {
            animation: ease 0.7s bottom-2 forwards;
          }
        }
      }

      @keyframes top {
        0% {
          top: 0;
          transform: rotate(0);
        }
        50% {
          top: 8px;
          transform: rotate(0);
        }
        100% {
          top: 8px;
          transform: rotate(45deg);
        }
      }

      @keyframes top-2 {
        0% {
          top: 8px;
          transform: rotate(45deg);
        }
        50% {
          top: 8px;
          transform: rotate(0deg);
        }
        100% {
          top: 0;
          transform: rotate(0deg);
        }
      }

      @keyframes bottom {
        0% {
          bottom: 0;
          transform: rotate(0);
        }
        50% {
          bottom: 6px;
          transform: rotate(0);
        }
        100% {
          bottom: 6px;
          transform: rotate(135deg);
        }
      }

      @keyframes bottom-2 {
        0% {
          bottom: 6px;
          transform: rotate(135deg);
        }
        50% {
          bottom: 6px;
          transform: rotate(0);
        }
        100% {
          bottom: 0;
          transform: rotate(0);
        }
      }

      @keyframes scaled {
        50% {
          transform: scale(0);
        }
        100% {
          transform: scale(0);
        }
      }

      @keyframes scaled-2 {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
    }

    .menu {
      display: flex;
      align-items: flex-end;
      justify-content:flex-end;
      height: 100%;

      @media only screen and (max-width: 768px) {
        display: none;
      }

      ul {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;

        li {
          a{
            &:hover {
            color: ${secondaryColorTheme};

            svg {
              color: ${secondaryColorTheme} !important;
            }
          }
        }
      }

      li a,
      .dropbtn {
        display: inline-block;
        color: white;
        text-align: center;
        padding: 15px 10px;
        text-decoration: none;
      }

      .arrow {
        margin: 2px;
        top: -2px;
        position: relative;
      }

      span {
        margin: 2px;
        top: -8px;
        position: relative;
      }

      li a:hover,
      .dropdown:hover .dropbtn {
      }

      li.dropdown {
        display: inline-block;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        right: 30px;

        a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;

          &:hover {
            background-color: #f1f1f1;
          }
        }
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }
    }
  }
`;

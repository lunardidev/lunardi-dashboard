import styled from "styled-components";
import { primaryColorTheme, secondaryColorTheme } from "../../../../theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .user {
    display: flex;
    align-items: center;
    flex-direction: column;

    .avatar {
      margin: 20px 0px;
      vertical-align: middle;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid #eee;
    }

    h4 {
      color: #263238;
      font-size: 16px;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.06px;
      padding: 2px;
    }

    p {
      color: #546e7a;
      font-size: 12px;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: -0.04px;
    }

    hr {
      background-color: #eee;
      border: 0;
      width: 85%;
      height: 1px;
      margin: 10px 0px;
    }
  }

  ul {
    &.side-bar {
      width: 100%;
      background: #fff;
      display: flex;
      flex-direction: column;
      margin-top: 10px;

      a {
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 13px 30px;
        color: ${primaryColorTheme};
        font-weight: 500;
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    ul {
      &.side-bar {
        a {
          padding: 5px 30px;
        }
      }
    }
  }

  ul.side-bar a.active {
    color: ${secondaryColorTheme};
  }

  ul.side-bar a.active svg {
    color: ${secondaryColorTheme}; !important;
  }

  ul.side-bar a svg {
    margin-right: 4px;
    position: relative;
  }

  ul.side-bar a:hover {
    background: #f3f3f3;
  }
`;

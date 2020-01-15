import PropTypes from "prop-types";
import styled from "styled-components";
import { backgroundTheme, buttonTheme, linkTheme } from "../../theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-font-smoothing: antialiased !important;
  background: ${backgroundTheme};
  overflow-x: hidden;

  ${linkTheme}

  header {
    top: 40px;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    width: calc(100% - 40px);
    max-width: 300px;
    padding: 50px;
    border-radius: 6px;
    box-shadow: 0 10px 20px rgba(3, 27, 78, 0.1);

    @media only screen and (min-width: 768px) {
      top: 0px;
      max-width: 450px;
    }

    h2 {
      font-weight: 500;
      font-size: 26px;
      margin-bottom: 10px;
    }

    input {
      background: #fcfcfc;
      border: 1px solid #e7e7e7;
      padding: 15px;
      border-radius: 6px;
      font-size: 14px;
      width: 100%;
      height: 40px;
      margin: 3px;
      -webkit-appearance: none;
      @media only screen and (min-width: 768px) {
        width: 350px;
      }
    }

    .field-error {
      border: 1px solid #cc2a36;
    }

    .nav-link {
      margin-top: 40px;
      font-weight: 600;
      font-size: 14px;
    }

    .alternate-links {
      display: flex;
      justify-content: center;
      margin-top: 16px;

      a {
        background: #f0f0f5;
        border: 1px solid rgba(209, 209, 224, 0.6);
        border-radius: 3px;
        color: #333;
        text-decoration: none;
        padding-left: 50px;
        padding-right: 50px;
        position: relative;
        height: 40px;
        line-height: 38px;
        margin: 3px;
        font-weight: 600;
        font-size: 12px;
        text-align: center;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        width: 120px;

        &:hover {
          background-color: #e0e0eb;
        }
      }

      svg {
        left: 16px;
        position: absolute;
        top: 18%;
      }
    }
  }
`;

Container.propTypes = {
  variant: PropTypes.oneOf(["dashboard", "signIn", "signUp"])
};

Container.defaultProps = {
  variant: "signUp"
};

export const Button = styled.button`

  ${buttonTheme}

  width: 100%;
  height: 40px;
  border: 0;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  -webkit-appearance: none;
  border-radius: 6px;
  margin: 3px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    width: 350px;
  }
}
`;

Button.propTypes = {
  variant: PropTypes.oneOf(["primary"])
};

Button.defaultProps = {
  variant: "primary"
};

import styled from "styled-components";
import {
  primaryColorTheme,
  secondaryColorTheme,
  textTheme
} from "../../../../theme";

export const Container = styled.div`
  background-color: ${primaryColorTheme};
  padding: 40px;
  position: inherit;

  div {
    p {
      text-align: center;
      font-size: 14px;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: -0.05px;
      color: ${textTheme};

      a {
        text-decoration: underscore;
        color: ${textTheme};

        &:hover {
          color: ${secondaryColorTheme};
        }
      }
    }
  }
`;

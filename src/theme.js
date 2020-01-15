import theme from "styled-theming";
import { css } from "styled-components";

import colors from "./colors";

export const backgroundTheme = theme.variants("mode", "variant", {
  dashboard: {
    light: colors.background.dashboard.light,
    dark: colors.background.dashboard.dark
  },
  signIn: {
    light: colors.background.signIn.light,
    dark: colors.background.signIn.dark
  },
  signUp: {
    light: colors.background.signUp.light,
    dark: colors.background.signUp.dark
  }
});

export const buttonTheme = theme.variants("mode", "variant", {
  primary: {
    light: css`
      color: ${colors.buttons.primary.light.textColor};
      background: ${colors.buttons.primary.light.background};

      &:disabled {
        color: ${colors.buttons.primary.light.disabledTextColor};
        background: ${colors.buttons.primary.light.disabled};
      }

      &:hover {
        color: ${colors.buttons.primary.light.textColor};
        background-color: ${colors.buttons.primary.light.houver};
      }

      &:hover:disabled {
        color: ${colors.buttons.primary.light.disabledTextColor};
        background-color: ${colors.buttons.primary.light.disabled};
      }
    `,
    dark: css`
      color: ${colors.buttons.primary.dark.textColor};
      background: ${colors.buttons.primary.dark.background};

      &:disabled {
        color: ${colors.buttons.primary.dark.disabledTextColor};
        background: ${colors.buttons.primary.dark.disabled};
      }

      &:hover {
        color: ${colors.buttons.primary.dark.textColor};
        background-color: ${colors.buttons.primary.dark.houver};
      }

      &:hover:disabled {
        color: ${colors.buttons.primary.dark.disabledTextColor};
        background-color: ${colors.buttons.primary.dark.disabled};
      }
    `
  }
});

export const linkTheme = theme("mode", {
  light: css`
    a {
      -webkit-appearance: none;
      text-decoration: none;
      color: ${colors.primary.light};
      &:hover {
        color: ${colors.secondary.light};
      }
    }
  `,
  dark: css`
    a {
      -webkit-appearance: none;
      text-decoration: none;
      color: ${colors.primary.dark};
      &:hover {
        color: ${colors.secondary.dark};
      }
    }
  `
});

export const primaryColorTheme = theme("mode", {
  light: colors.primary.light,
  dark: colors.primary.dark
});

export const secondaryColorTheme = theme("mode", {
  light: colors.secondary.light,
  dark: colors.secondary.dark
});

export const textTheme = theme("mode", {
  light: colors.text.light,
  dark: colors.text.dark
});

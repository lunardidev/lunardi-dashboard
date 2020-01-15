const white = "#FFFFFF";
const black = "#000000";
const primary = "#3d3d5c";
const secondary = "#43a047";

export default {
  primary: {
    dark: black,
    light: primary
  },
  secondary: {
    dark: "#333",
    light: secondary
  },
  text: {
    dark: "#333",
    light: "#fff"
  },
  background: {
    dashboard: { dark: "#333", light: "#f4f4f8" },
    signIn: { dark: "#333", light: "#8c9da9" },
    signUp: { dark: "#333", light: "#8c9da9" }
  },
  buttons: {
    primary: {
      light: {
        background: "#666699",
        textColor: white,
        disabled: "#ddd",
        disabledTextColor: "#bbb",
        houver: primary
      },
      dark: {
        background: "#737373",
        textColor: white,
        disabled: "#c3c3c3",
        disabledTextColor: "#737373",
        houver: "#333"
      }
    }
  }
};

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}

html, border-style, #root{
  height:100%;
}

body {
    font: 14px 'Roboto', sans-serif;
    background: #fff;
    color:#333;
    
    -webkit-font-smoothing: antialiased !important;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    overflow-y: auto;
    resize: horizontal;
}

.fade-transition {
    position:absolute;
    width: 100%;
    height: 100%;

}

.fade-transition-enter {
  opacity: 0;
}

.fade-transition-enter-active {
  opacity: 1;

  transition: opacity 300ms, transform 300ms;
}
.fade-transition-exit {
  opacity: 1;
}
.fade-transition-exit-active {
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}

`;

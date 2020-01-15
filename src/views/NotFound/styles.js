import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-font-smoothing: antialiased !important;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  background-image: url("https://images.unsplash.com/photo-1496195532171-f57bc0565df4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");

  a {
    -webkit-appearance: none;
    text-decoration: none;
    color: #737373;
  }

  a:hover {
    color: #666699;
  }

  header {
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    width: 100%;
    max-width: 300px;
    padding: 40px;
    border-radius: 6px;
    box-shadow: 0 10px 20px rgba(3, 27, 78, 0.1);

    @media only screen and (min-width: 768px) {
      max-width: 450px;
    }

    h2 {
      font-weight: 500;
      font-size: 26px;
      margin-bottom: 10px;
    }
  }
`;

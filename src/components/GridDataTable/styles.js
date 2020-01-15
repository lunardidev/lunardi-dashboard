import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;

  div {
    display: grid;
    grid-template-columns: ${props => props.columns || "1fr"};
  }

  div > span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    padding: 16px;
    font-size: 14px;
    line-height: 21px;
    border-bottom: 1px solid #f3f3f3;

    svg {
      background: #ebf4f6;
      border-radius: 22px;
      color: #58668b;
    }
  }

  div:hover {
    background: #fafafa;
  }

  div:first-child > span {
    font-weight: bold;
    background: #f8f8fa;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px;
  }

  .pagination a {
    padding: 20px;
    text-decoration: none;
    color: #000;
    font-weight: 400;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 14px;
  }

  .pagination a:hover {
    background: #c3c3c3;
    color: #000;
    font-weight: normal;
  }

  .pagination .selected {
    font-weight: bold;
    background: #3d3d5c;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
  }
`;

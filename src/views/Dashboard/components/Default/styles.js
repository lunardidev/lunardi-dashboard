import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px;
  margin: 10px 0;

  .card {
    flex: 1 1 200px;
    max-width: 100%;

    .card-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 15px;

      svg {
        top: -15px;
        position: relative;
      }

      span {
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      }
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || "1fr"};

  .card {
    margin: 10px 10px;

    .chart {
      padding: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

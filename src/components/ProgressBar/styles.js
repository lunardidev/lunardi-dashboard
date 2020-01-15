import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  background: rgba(255, 255, 255, 0.3);
  color: ${props => props.color || "#000"};
  border-radius: 4px;
  width: 200px;

  .percentage {
    background: ${props => props.background || "transparent"};
    font-size: 12px;
    width: ${props => `${props.percentage}%` || "0%"};
    position: relative;
    display: block;
    left: 0;
    padding: 2px;
  }
`;

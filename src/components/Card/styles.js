import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.background || "transparent"};
  color: ${props => props.color || "#000"};
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);
  margin: 10px;
  overflow-x: hidden;

  .header {
    font-weight: bold;
    height: 30px;
    width: 100%;
    padding: 10px;
    font-size: 14px;
  }

  .content {
    width: 100%;
    height: 100%;
  }
`;

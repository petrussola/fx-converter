import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: #333333;
  margin-top: 83px;
  h1 {
    font-size: 28px;
    margin: 0;
    height: 33px;
  }
  p {
    font-size: 18px;
    margin: 9px 0 0 0;
    height: 21px;
  }
`;

export default function Header() {
  return (
    <StyledDiv>
      <h1>Currency converter</h1>
      <p>Please enter the amount you want to convert in any field.</p>
    </StyledDiv>
  );
}

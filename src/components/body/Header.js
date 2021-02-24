import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-left: 35px;
  margin-bottom: 92px;
  h1 {
    font-size: 28px;
  }
  p {
    font-size: 18px;
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

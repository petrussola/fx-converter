import React from "react";
import styled from "styled-components";

// components
import CurrencyBox from "./CurrencyBox";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export default function Body() {
  return (
    <StyledDiv>
      <CurrencyBox />
      <CurrencyBox />
    </StyledDiv>
  );
}

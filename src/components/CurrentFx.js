import React from "react";
import styled from "styled-components";

// components
import HeaderCurrentFx from "./currentfx/HeaderCurrentFx";
import Grid from "./currentfx/Grid";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 931px;
  margin-left: 235px;
  margin-bottom: 35px;
  @media (max-width: 1100px) {
    margin: 0 auto;
    align-items: center;
  }
`;

export default function CurrentFx() {
  return (
    <StyledSection>
      <HeaderCurrentFx />
      <Grid />
    </StyledSection>
  );
}

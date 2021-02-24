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
  width: 75%;
  margin: 0 auto;
`;

export default function CurrentFx() {
  return (
    <StyledSection>
      <HeaderCurrentFx />
      <Grid />
    </StyledSection>
  );
}
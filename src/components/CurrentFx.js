import React from "react";
import styled from "styled-components";

// components
import HeaderCurrentFx from "./currentfx/HeaderCurrentFx";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default function CurrentFx() {
  return (
    <StyledSection>
      <HeaderCurrentFx />
    </StyledSection>
  );
}

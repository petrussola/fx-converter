import React, { useContext } from "react";
import styled from "styled-components";

// context
import { fxContext } from "../../context/fx";

const StyledDiv = styled.div`
  margin-top: 83px;
  margin-left: 35px;
  margin-bottom: 39px;
  h1 {
    font-size: 28px;
  }
  p {
    font-size: 18px;
  }
`;

export default function HeaderCurrentFx() {
  const { selectedBaseCurrency, currencies } = useContext(fxContext);
  const nameCurrency = currencies[selectedBaseCurrency.iso];
  const title = `${nameCurrency} (${selectedBaseCurrency.iso})`;
  return (
    <StyledDiv>
      <h1>{!nameCurrency ? "Loading..." : title} Exchange Rates</h1>
    </StyledDiv>
  );
}

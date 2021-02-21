import React, { useContext } from "react";
import styled from "styled-components";

// components
import CurrencyBox from "./CurrencyBox";

// context
import { fxContext } from "../../context/fx";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding-left: 200px;
  align-items: center;
`;

export default function Body() {
  // since we use the same component CurrencyBox, we grab default currencies base and destination and pass it down from here as props 'defaultCurrency'
  const { selectedBaseCurrency, selectedDestinationCurrency } = useContext(
    fxContext
  );

  return (
    <StyledDiv>
      <CurrencyBox
        defaultCurrency={selectedBaseCurrency.iso}
        name="baseCurrency"
      />
      <CurrencyBox
        defaultCurrency={selectedDestinationCurrency.iso}
        name="destinationCurrency"
      />
    </StyledDiv>
  );
}

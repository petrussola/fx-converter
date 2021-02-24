import React, { useContext } from "react";
import styled from "styled-components";

// components
import CurrencyBox from "./body/CurrencyBox";
import Header from "./body/Header";

// context
import { fxContext } from "../context/fx";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 75%;
  margin: 0 auto;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

export default function Body() {
  // since we use the same component CurrencyBox, we grab default currencies base and destination and pass it down from here as props 'defaultCurrency'
  const { selectedBaseCurrency, selectedDestinationCurrency } = useContext(
    fxContext
  );

  return (
    <StyledSection>
      <Header />
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
    </StyledSection>
  );
}

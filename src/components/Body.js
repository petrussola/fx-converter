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
  max-width: 75%;
  margin-left: 235px;
  @media (max-width: 1100px) {
    min-width: 95%;
    margin: 0 auto;
    align-items: center;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
    width: 100%;
  }
`;

export default function Body() {
  // since we use the same component CurrencyBox, we grab default currencies base and destination and pass it down from here as props 'defaultCurrency'
  const { selectedBaseCurrency, selectedDestinationCurrency } = useContext(
    fxContext
  );

  return (
    <StyledSection className="main-section">
      <Header />
      <StyledDiv className='wrapper-boxes'>
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

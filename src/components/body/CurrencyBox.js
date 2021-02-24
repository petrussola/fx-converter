import React from "react";
import styled from "styled-components";

// components
import CurrencyPicker from "./currencybox/CurrencyPicker";
import AmountField from "./currencybox/AmountField";
import CurrentFx from "./currencybox/CurrentFx";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 62px;
  &.destination {
    margin-left: 35px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: #f0f1f4;
  height: 293px;
  width: 436px;
  border-radius: 10px;
`;

export default function CurrencyBox({ defaultCurrency, name }) {
  return (
    <StyledSection
      className={name === "destinationCurrency" ? "destination" : ""}
    >
      <StyledDiv>
        <CurrencyPicker defaultCurrency={defaultCurrency} name={name} />
        <AmountField defaultCurrency={defaultCurrency} name={name} />
      </StyledDiv>
      <CurrentFx name={name} />
    </StyledSection>
  );
}

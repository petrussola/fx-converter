import React from "react";
import styled from "styled-components";

// components
import CurrencyPicker from "./currencybox/CurrencyPicker";
import AmountField from "./currencybox/AmountField";

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
    <StyledDiv>
      <CurrencyPicker defaultCurrency={defaultCurrency} name={name} />
      <AmountField defaultCurrency={defaultCurrency} />
    </StyledDiv>
  );
}

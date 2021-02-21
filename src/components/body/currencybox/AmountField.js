import React, { useContext } from "react";
import styled from "styled-components";

// context
import { fxContext } from "../../../context/fx";

// helpers
import { convertInputAmount } from "../../../helpers/helpers";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0 auto;
  input {
    width: 340px;
    height: 62px;
    font-size: 21px;
    background: #ffffff;
    border: 1px solid #bfbfbf;
    border-radius: 6px;
    padding-left: 21px;
  }
`;

export default function AmountField({ defaultCurrency, name }) {
  const {
    selectedBaseCurrency,
    setSelectedBaseCurrency,
    selectedDestinationCurrency,
    setSelectedDestinationCurrency,
  } = useContext(fxContext);

  const changeAmount = (e) => {
    // convert iput amount to number
    const inputAmount = parseInt(e.target.value);
    // grab fx of destination currency from state
    const fx = selectedBaseCurrency.fx[selectedDestinationCurrency.iso];
    // call helper function, returns number with 4 decimals
    const destinationAmount = convertInputAmount(inputAmount, fx);
    // track amount typed in the base currency in state and converted amount in destination currency state
    if (name === "baseCurrency") {
      setSelectedBaseCurrency({ ...selectedBaseCurrency, typed: inputAmount });
      setSelectedDestinationCurrency({
        ...selectedDestinationCurrency,
        typed: destinationAmount,
      });
    }
  };
  return (
    <StyledForm>
      <label htmlFor={name}>Enter amount</label>
      <input
        type="number"
        id={name}
        placeholder={0}
        onChange={changeAmount}
        value={
          name === "baseCurrency"
            ? selectedBaseCurrency.typed
            : selectedDestinationCurrency.typed
        }
      />
    </StyledForm>
  );
}

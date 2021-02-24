import React, { useContext } from "react";
import styled from "styled-components";

// context
import { fxContext } from "../../../context/fx";

// helpers
import {
  convertInputAmount,
  returnCurrencySymbol,
} from "../../../helpers/helpers";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0 auto;
  position: relative;
  span {
    position: absolute;
    padding: 21px 0;
    width: 340px;
    font-size: 21px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    top: 20px;
    color: #3a3b3f;
  }
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
    setWhichCurrency,
  } = useContext(fxContext);

  const changeAmount = (e) => {
    // track which currency is being manipulated in state
    setWhichCurrency(
      name === "baseCurrency" ? "baseCurrency" : "destinationCurrency"
    );
    // grab fx of destination currency from state
    const fx = selectedBaseCurrency.fx[selectedDestinationCurrency.iso];
    // call helper function, returns number with 4 decimals. It is ready for when User typed on the left amount field or the right amount field
    const { base, destination } = convertInputAmount(e.target.value, fx, name);
    // set base and destination currency amount
    setSelectedBaseCurrency({ ...selectedBaseCurrency, typed: base });
    setSelectedDestinationCurrency({
      ...selectedDestinationCurrency,
      typed: destination,
    });
  };

  const passedState =
    name === "baseCurrency"
      ? selectedBaseCurrency
      : selectedDestinationCurrency;
  const symbol = returnCurrencySymbol(passedState);

  return (
    <StyledForm>
      <label htmlFor={name}>Enter amount</label>
      <span class="test">{symbol}</span>
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

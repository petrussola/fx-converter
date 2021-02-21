import React, { useContext } from "react";
import styled from "styled-components";

// context
import { fxContext } from "../../../context/fx";

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
    const amount = parseInt(e.target.value);
    if (name === "baseCurrency") {
      setSelectedBaseCurrency({ ...selectedBaseCurrency, typed: amount });
      setSelectedDestinationCurrency({
        ...selectedDestinationCurrency,
        typed:
          amount * selectedBaseCurrency.fx[selectedDestinationCurrency.iso],
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

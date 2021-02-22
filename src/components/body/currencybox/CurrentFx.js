import React, { useContext } from "react";
import styled from "styled-components";

// context
import { fxContext } from "../../../context/fx";

const StyledDiv = styled.div`
  font-size: 18px;
  margin: 18px 0 0 70px;
`;

export default function CurrentFx({ name }) {
  const { selectedBaseCurrency, selectedDestinationCurrency } = useContext(
    fxContext
  );

  const fx = selectedBaseCurrency.fx[selectedDestinationCurrency.iso];

  const reverseFx = 1 / fx;

  // display nothing if data is pulling or user has not typed any amount
  if (
    (Object.keys(selectedBaseCurrency.fx).length === 0 &&
      selectedBaseCurrency.fx.constructor === Object) ||
    selectedBaseCurrency.typed === 0
  ) {
    return null;
  }

  // if currency box is the one on the left, show fx to the currency on the right
  if (name === "baseCurrency") {
    return (
      <StyledDiv>{`1 ${selectedBaseCurrency.iso} = ${fx.toFixed(4)} ${
        selectedDestinationCurrency.iso
      }`}</StyledDiv>
    );
  }
  return (
    <StyledDiv>{`1 ${selectedDestinationCurrency.iso} = ${reverseFx.toFixed(
      4
    )} ${selectedBaseCurrency.iso}`}</StyledDiv>
  );
}

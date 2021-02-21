import React, { useContext } from "react";
import styled from "styled-components";

// components
import SymbolOption from "./currencypicker/SymbolOption";

// context
import { fxContext } from "../../../context/fx";

// helpers
import { convertCurrenciesIntoArray, grabFx } from "../../../helpers/helpers";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0 auto;
  select {
    width: 361px;
    height: 62px;
    font-size: 21px;
    border: 1px solid #bfbfbf;
    border-radius: 6px;
    padding: 18px;
    background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png")
      no-repeat right #ffffff;
    -webkit-appearance: none;
    background-position-x: 330px;
  }
`;

export default function CurrencyPicker({ defaultCurrency, name }) {
  const {
    currencies,
    selectedBaseCurrency,
    setSelectedBaseCurrency,
    selectedDestinationCurrency,
    setSelectedDestinationCurrency,
  } = useContext(fxContext);

  const symbols = convertCurrenciesIntoArray(currencies);

  const selectCurrency = async (e) => {
    try {
      // if selector is base currency, set selected base currency state, which comes already shaped as {iso: {{base currency}}, fx: {fx to other symbols}}
      if (name === "baseCurrency") {
        // call helper function that will call the fx api and return new selected currency state
        const newSelectedCurrency = await grabFx(e.target.value);
        setSelectedBaseCurrency(newSelectedCurrency);
      } else {
        setSelectedDestinationCurrency({
          ...selectedDestinationCurrency,
          iso: e.target.value,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <StyledDiv>
      <label htmlFor="currencies">Currency</label>
      <select
        name="currencies"
        id="currencies"
        value={defaultCurrency}
        onChange={selectCurrency}
      >
        {symbols.map((symbol, index) => {
          return <SymbolOption key={index} symbol={symbol} />;
        })}
      </select>
    </StyledDiv>
  );
}

import React, { useContext } from "react";

// components
import SymbolOption from "./SymbolOption";

// context
import { fxContext } from "../../context/fx";

// helpers
import { convertCurrenciesIntoArray, grabFx } from "../../helpers/helpers";

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
    <div>
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
    </div>
  );
}

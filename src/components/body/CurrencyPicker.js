import React, { useContext } from "react";

// components
import SymbolOption from "./SymbolOption";

// context
import { fxContext } from "../../context/fx";

// helpers
import {
  convertCurrenciesIntoArray,
  findSymbolCurrency,
} from "../../helpers/helpers";

export default function CurrencyPicker({ defaultCurrency, name }) {
  const {
    currencies,
    setSelectedBaseCurrency,
    setSelectedDestinationCurrency,
  } = useContext(fxContext);

  const symbols = convertCurrenciesIntoArray(currencies);

  const selectCurrency = (e) => {
    const iso = findSymbolCurrency(e.target.value);

    if (name === "baseCurrency") {
      return setSelectedBaseCurrency(iso);
    }
    // if selection destination currency, set destination currency state
    return setSelectedDestinationCurrency(iso);
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

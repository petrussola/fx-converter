import React, { useContext } from "react";

// components
import SymbolOption from "./SymbolOption";

// context
import { fxContext } from "../../context/fx";

// helpers
import { convertCurrenciesIntoArray } from "../../helpers/helpers";

export default function CurrencyPicker({ defaultCurrency, name }) {
  const {
    currencies,
    setSelectedBaseCurrency,
    setSelectedDestinationCurrency,
  } = useContext(fxContext);

  const symbols = convertCurrenciesIntoArray(currencies);

  const selectCurrency = (e) => {
    // grab the selected currency
    const currency = e.target.value;
    // find position where the currency symbol starts
    const position = currency.indexOf("(");
    // grab symbol of currency
    const iso = currency.substring(position + 1, position + 4);
    // if selecting base currency, set base currency state
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

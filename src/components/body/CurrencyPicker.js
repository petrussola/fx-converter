import React, { useContext } from "react";

// components
import SymbolOption from "./SymbolOption";

// context
import { fxContext } from "../../context/fx";

// helpers
import { convertCurrenciesIntoArray } from "../../helpers/helpers";

export default function CurrencyPicker({ defaultCurrency }) {
  const { currencies } = useContext(fxContext);

  const symbols = convertCurrenciesIntoArray(currencies);

  return (
    <div>
      <select name="currencies" id="currencies" value={defaultCurrency}>
        {symbols.map((symbol, index) => {
          return <SymbolOption key={index} symbol={symbol} />;
        })}
      </select>
    </div>
  );
}

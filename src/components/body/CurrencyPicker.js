import React, { useContext } from "react";

// components
import SymbolOption from "./SymbolOption";

// context
import { fxContext } from "../../context/fx";

export default function CurrencyPicker(props) {
  const { currencies } = useContext(fxContext);
  const symbols = [];
  for (const symbol in currencies) {
    symbols.push(`${currencies[symbol]} (${symbol})`);
  }
  return (
    <div>
      <select name="currencies" id="currencies">
        {symbols.map((symbol, index) => {
          return <SymbolOption key={index} symbol={symbol} />;
        })}
      </select>
    </div>
  );
}

import React, { useContext } from "react";

// context
import { fxContext } from "../../../../context/fx";

export default function SymbolOption({ symbol }) {
  const { currencies } = useContext(fxContext);

  return <option value={symbol}>{`${currencies[symbol]} (${symbol})`}</option>;
}

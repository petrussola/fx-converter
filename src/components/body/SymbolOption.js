import React from "react";

export default function SymbolOption({ symbol }) {
  return (
    <option
      value={symbol}
      selected={symbol === "United States Dollar (USD)" ? true : false}
    >
      {symbol}
    </option>
  );
}

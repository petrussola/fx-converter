import React from "react";

// components
import CurrencyPicker from "./CurrencyPicker";

export default function CurrencyBox({ defaultCurrency, name }) {
  return (
    <div>
      <CurrencyPicker defaultCurrency={defaultCurrency} name={name} />
    </div>
  );
}

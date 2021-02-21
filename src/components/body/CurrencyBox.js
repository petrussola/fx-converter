import React from "react";

// components
import CurrencyPicker from "./CurrencyPicker";

export default function CurrencyBox({ defaultCurrency }) {
  return (
    <div>
      <CurrencyPicker defaultCurrency={defaultCurrency} />
    </div>
  );
}

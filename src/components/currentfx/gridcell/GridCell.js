import React, { useContext } from "react";

// context
import { fxContext } from "../../../context/fx";

export default function GridCell({ iso }) {
  const { currencies, selectedBaseCurrency } = useContext(fxContext);
  // filters currencies so the one selected does not show up in the table
  if (iso === selectedBaseCurrency.iso) {
    return null;
  }
  return (
    <>
      <div>{iso}</div>
      <div>{currencies[iso]}</div>
      <div>{selectedBaseCurrency.fx[iso].toFixed(3)}</div>
    </>
  );
}

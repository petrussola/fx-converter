import React, { useContext } from "react";

// context
import { fxContext } from "../../../context/fx";

export default function GridCell({ iso }) {
  const { currencies, selectedBaseCurrency } = useContext(fxContext);
  return (
    <>
      <div>{iso}</div>
      <div>{currencies[iso]}</div>
      <div>{selectedBaseCurrency.fx[iso].toFixed(3)}</div>
    </>
  );
}

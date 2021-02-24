import React, { useContext } from "react";
import styled from "styled-components";

// components
import GridCell from "./gridcell/GridCell";

// context
import { fxContext } from "../../context/fx";

const StyledGrid = styled.div`
  width: 100%;
  height: 781px;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: repeat(17, 1fr);
  border: 1px solid red;

  .item1 {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  /* div {
    border: 1px solid red;
  } */
`;

export default function Grid() {
  const { selectedBaseCurrency, currencies } = useContext(fxContext);
  if (Object.keys(currencies).length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <StyledGrid>
      <div>Currency</div>
      <div>Currency Name</div>
      <div>{`Exchange Rate = 1 ${selectedBaseCurrency.iso}`}</div>
      {Object.keys(currencies).map((iso, index) => {
        return <GridCell key={index} iso={iso} />;
      })}
    </StyledGrid>
  );
}

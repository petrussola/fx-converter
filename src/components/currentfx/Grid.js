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
  justify-items: stretch;
  align-items: stretch;

  div {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 300;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 24px;
  }

  .header {
    background: #f0f1f4;
    line-height: 21.09px;
    font-weight: bold;
    color: #333333;
  }
`;

export default function Grid() {
  const { selectedBaseCurrency, currencies } = useContext(fxContext);
  if (
    Object.keys(currencies).length === 0 ||
    Object.keys(selectedBaseCurrency.fx).length === 0
  ) {
    return <div>Loading...</div>;
  }
  return (
    <StyledGrid>
      <div className="header">Currency</div>
      <div className="header">Currency Name</div>
      <div className="header">{`Exchange Rate = 1 ${selectedBaseCurrency.iso}`}</div>
      {Object.keys(currencies).map((iso, index) => {
        return <GridCell key={index} iso={iso} />;
      })}
    </StyledGrid>
  );
}

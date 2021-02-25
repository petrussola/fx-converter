import React, { useContext } from "react";
import styled from "styled-components";

// components
import Title from "./navbar/Title";

// context
import { fxContext } from "../context/fx";

const StyledDiv = styled.div`
  background-color: #2b439c;
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 231px;
  @media (max-width: 1100px) {
    padding-left: 0;
    min-height: 100%;
    justify-content: center;
  }
`;

export default function NavBar() {
  const { titles } = useContext(fxContext);
  return (
    <StyledDiv>
      {titles.map((title, index) => {
        return <Title key={index} title={title} />;
      })}
    </StyledDiv>
  );
}

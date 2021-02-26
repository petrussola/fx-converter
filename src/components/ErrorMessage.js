import React, { useContext } from "react";
import styled from "styled-components";

// context
import { fxContext } from "../context/fx";

const StyledDiv = styled.div`
  background-color: red;
  border-radius: 6px;
  min-width: 200px;
  max-width: 50%;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: bold;
  margin: 1rem auto 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function ErrorMessage() {
  const { errorMessage } = useContext(fxContext);
  if (errorMessage === "") {
    return null;
  }
  return <StyledDiv>{errorMessage}</StyledDiv>;
}

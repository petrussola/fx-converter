import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0 auto;
  input {
    width: 340px;
    height: 62px;
    font-size: 21px;
    background: #ffffff;
    border: 1px solid #bfbfbf;
    border-radius: 6px;
    padding-left: 21px;
  }
`;

export default function AmountField({ defaultCurrency }) {
  return (
    <StyledForm>
      <label htmlFor={defaultCurrency}>Enter amount</label>
      <input type="number" id={defaultCurrency} />
    </StyledForm>
  );
}

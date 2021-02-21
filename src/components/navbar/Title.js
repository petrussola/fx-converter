import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 297px;
  color: #ffffff;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.08em;
`;

export default function Title({ title }) {
  return <StyledDiv>{title.toUpperCase()}</StyledDiv>;
}

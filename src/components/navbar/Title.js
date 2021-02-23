import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  height: 100%;
  width: 297px;
  color: #ffffff;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.08em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &.selected {
    background-color: #15255E;
  }
`;

export default function Title({ title }) {
  const pathTo =
    title === "currency converter"
      ? { path: "/", exact: true }
      : { path: "/current-fx", exact: false };
  return (
    <StyledLink
      to={pathTo.path}
      exact={pathTo.exact}
      activeClassName="selected"
    >
      {title.toUpperCase()}
    </StyledLink>
  );
}

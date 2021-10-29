import React from "react";
import styled from "styled-components";
function NavBar() {
  return (
    <NavMenu>
      <h3>States & Capitals API </h3>
      <a href="/">States</a>
      <a href="/">API Docs</a>
    </NavMenu>
  );
}

export default NavBar;
const NavMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 5px;
  background: rgba(207, 207, 207, 0.404);
  color: rgb(23, 30, 49);
  border-bottom: 3px solid white;
  padding: 15px;
  a {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 15px;
    font-weight: thin;
    &:hover {
      color: rgb(23, 30, 49);
    }
  }
  h3 {
    font-size: 25px;
    margin: 0px;
    @media only screen and (max-width: 600px) {
      width: 100%;
      text-align: center;
      margin-bottom: 24px;
    }
  }
`;

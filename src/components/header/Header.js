import React from "react";
import {HeaderStyled} from "./HeaderStyled";
import Navigation from "./navigation/Navigation";


const Header = () => (
  <HeaderStyled>
    <Navigation />
  </HeaderStyled>
);

export default Header;

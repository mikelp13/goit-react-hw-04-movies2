import React from "react";
import { NavLink } from "react-router-dom";
import navlinkRoutes from "../../../routes/headerNavigation";
import { NavList } from "./NavigationStyled";

const Navigation = () => (
  <NavList className="navagationList">
    {navlinkRoutes.map(({ path, name, exact }) => (
      <li key={path}>
        <NavLink
          to={path}
          exact={exact}
          className="navagationLink"
          activeClassName="activeLink"
        >
          {name}
        </NavLink>
      </li>
    ))}
  </NavList>
);

export default Navigation;





/* <li className="navagationListItem">
      <NavLink exact to='/' className="navagationLink" activeClassName="activeLink">
        Home
      </NavLink>
    </li>
    <li className="navagationListItem">
      <NavLink to='/movies' className="navagationLink" activeClassName="activeLink">
        Movies
  </NavLink>
</li> */

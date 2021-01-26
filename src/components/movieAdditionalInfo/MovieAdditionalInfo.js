import React from "react";
import { Link } from "react-router-dom";
import movieDetailsRoutes from "../../routes/movieDetailsRoutes";
import { AddInfoContainer } from "./MovieAdditionalInfoStyled";

const MovieAdditionalInfo = ({ match }) => {
  return (
    <AddInfoContainer>
      <p className="additionalInfoTitle">Additional information</p>
      <ul className="additionalInfoList">
        {movieDetailsRoutes.map(({ path, name }) => (
          <li className="additionalInfoItem" key={path}>
            <Link to={`${match.url}${path}`} className="additionalInfoLink"> {name} </Link>
          </li>
        ))}
      </ul>
    </AddInfoContainer>
  );
};

export default MovieAdditionalInfo;

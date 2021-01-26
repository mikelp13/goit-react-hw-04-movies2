import React from "react";
import CastListItem from "./castListItem/CastListItem";
import CastListStyled from "./CastListStyled";
import PropTypes from "prop-types";

const CastList = ({ credits }) => {
  return (
    <CastListStyled>
      {credits.map((actor) => (
        <CastListItem key={actor.id} actor={actor}/>
      ))}
    </CastListStyled>
  );
};

export default CastList;

CastList.propTypes = {
  credits: PropTypes.arrayOf(PropTypes.object).isRequired
};
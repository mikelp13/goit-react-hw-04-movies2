import React from "react";

const CastListItem = ({ actor }) => {
  return (
    <li className="castListItem">
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : "https://dummyimage.com/200x300/b3b3b3/fafafa.jpg&text=photo"
        }
        alt={actor.original_name}
        className="castListImg"
      />
      <div className="castListInfo">
      <p className="castListTitle">{actor.original_name}</p>
      <p className="castListDescr">character: {actor.character}</p>
      </div>
    </li>
  );
};

export default CastListItem;

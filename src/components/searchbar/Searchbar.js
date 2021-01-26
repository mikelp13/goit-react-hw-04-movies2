import React, { useState } from "react";
import { SearchbarStyled } from "./SearchbarStyled";
import PropTypes from "prop-types";

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };
  return (
    <SearchbarStyled className="searchbar">
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchFormInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className="searchFormButton">
          Search
        </button>
      </form>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;

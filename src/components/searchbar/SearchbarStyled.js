import styled from "styled-components";

export const SearchbarStyled = styled.ul`
 text-align: center;

  .searchForm {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }

  .searchFormInput {
    display: inline-block;
    padding: 5px 15px;
    width: 100%;
    font: inherit;
    font-size: 20px;
    margin-right: 10px;
  }

  .searchFormInput::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

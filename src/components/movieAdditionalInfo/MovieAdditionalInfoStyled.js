import styled from "styled-components";

export const AddInfoContainer = styled.div`
  margin-bottom: 30px;
  background-color: #f5f5f5;
  padding: 10px;


  .additionalInfoTitle {
    margin-bottom: 10px;
    font-size: 20px;
  }

  .additionalInfoItem {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .additionalInfoLink {
    text-decoration: none;
    font-size:18px;
    font-weight: 500;
    color: #000;
    background-color: #828c84;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 5px;

    &:hover,
    &:focus {
      background-color: #1e2625;
      color: yellow;
      transition: all 250ms ease-in-out;
    }
  }
`;
